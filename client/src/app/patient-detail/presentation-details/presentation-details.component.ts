import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  presentingSymptomOptions
} from '../../maps/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { delay, filter, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { isEqual } from 'lodash-es';
import { Presentation } from 'src/app/models/presentation.model';
@Component({
  selector: 'bl-presentation-details',
  templateUrl: './presentation-details.component.html',
  styleUrls: ['./presentation-details.component.css']
})
export class PresentationDetailsComponent implements OnInit, OnDestroy {
  presentingSymptomOptions: any = presentingSymptomOptions.map;
  presentationFormGroup: FormGroup;
  @Input() parentForm: FormGroup;
  @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  presentation: Observable<Presentation>;
  private unsubscribe: Subject<void> = new Subject();
  constructor(private activePatientStoreService: ActivePatientStoreService) { }

  controls = {
    gravity: new FormControl('', Validators.required),
    parity: {
      num_full_term_births: new FormControl('', Validators.required),
      num_pre_term_births: new FormControl('', Validators.required),
      num_abortions: new FormControl('', Validators.required),
      num_living_children: new FormControl('', Validators.required),
    },
    last_menstrual_period: new FormControl('', Validators.required),
    presenting_symptoms: new FormControl('', Validators.required),
  };

  ngOnInit(): void {
    this.presentationFormGroup = new FormGroup({
      gravity: this.controls.gravity,
      parity: new FormGroup(this.controls.parity),
      last_menstrual_period: this.controls.last_menstrual_period,
      presenting_symptoms: this.controls.presenting_symptoms
    });

    this.parentForm.addControl('presentationFormGroup', this.presentationFormGroup);

    this.presentation = this.activePatientStoreService.presentation$
      .pipe(
        delay(0),
        filter(presentation => presentation !== null && presentation !== undefined),
        tap(presentation => this.presentationFormGroup.patchValue(presentation)));
    this.onChanges();
  }
  onChanges() {
    this.presentationFormGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.presentation = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
