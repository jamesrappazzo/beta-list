import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralPatientDetails } from 'src/app/models/general-patient-details.model';
import { filter, tap, delay, distinctUntilChanged, debounceTime, takeWhile, takeUntil } from 'rxjs/operators';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { Observable, Subject } from 'rxjs';
import { isEqual } from 'lodash-es';
import { PathologyResults } from 'src/app/models/pathology-results.model';
import { nullableBooleanRadioOptions } from 'src/app/maps';

@Component({
  selector: 'bl-pathology-results-details',
  templateUrl: './pathology-details.component.html',
  styleUrls: ['./pathology-details.component.css']
})
export class PathologyResultsDetailsComponent implements OnInit, OnDestroy {
  pathologyResultsFormGroup: FormGroup;
  @Input() parentForm: FormGroup;
  @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  pathologyResults: Observable<PathologyResults>;
  private unsubscribe: Subject<void> = new Subject();
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  constructor(private activePatientStoreService: ActivePatientStoreService) { }

  controls = {
    date: new FormControl('', Validators.required),
    products_of_conception: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required)
  };

  ngOnInit(): void {
    this.pathologyResultsFormGroup = new FormGroup({
      date: this.controls.date,
      products_of_conception: this.controls.products_of_conception,
      comments: this.controls.comments
    });

    this.parentForm.addControl('pathologyResultsFormGroup', this.pathologyResultsFormGroup);

    this.pathologyResults = this.activePatientStoreService.pathologyResults$
      .pipe(
        delay(0),
        filter(pathologyResults => pathologyResults !== null && pathologyResults !== undefined),
        tap(pathologyResults => this.pathologyResultsFormGroup.patchValue(pathologyResults)));
    this.onChanges();
  }
  onChanges() {
    this.pathologyResultsFormGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.pathologyResults = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
