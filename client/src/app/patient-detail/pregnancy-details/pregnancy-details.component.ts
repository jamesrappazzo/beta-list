import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  nullableBooleanRadioOptions,
  birthControlMethodOptions,
} from '../../maps/index';
import { Pregnancy } from 'src/app/models/pregnancy.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients.service';
import { tap, delay, filter, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { isEqual } from 'lodash-es';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
@Component({
  selector: 'bl-pregnancy-details',
  templateUrl: './pregnancy-details.component.html',
  styleUrls: ['./pregnancy-details.component.css']
})
export class PregnancyDetailsComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup;
  pregnancy: Observable<Pregnancy>;
  private unsubscribe: Subject<void> = new Subject();
  pregnancyFormGroup: FormGroup;

  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  birthControlMethodOptions: any = birthControlMethodOptions.map;
  controls = {
    desired: new FormControl(null, Validators.required),
    rh_positive: new FormControl(null, Validators.required),
    birth_control_method: new FormControl('', Validators.required),
  };
  constructor(private activePatientStoreService: ActivePatientStoreService) { }
  ngOnInit(): void {
    this.pregnancyFormGroup = new FormGroup({
      desired: this.controls.desired,
      rh_positive: this.controls.rh_positive,
      birth_control_method: this.controls.birth_control_method
    });

    this.parentForm.addControl('pregnancyFormGroup', this.pregnancyFormGroup);

    this.pregnancy = this.activePatientStoreService.pregnancy$
      .pipe(
        delay(0),
        filter(pregnancy => pregnancy !== null && pregnancy !== undefined),
        tap(pregnancy => this.pregnancyFormGroup.patchValue(pregnancy)));
    this.onChanges();
  }
  onChanges() {
    this.pregnancyFormGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.pregnancy = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
