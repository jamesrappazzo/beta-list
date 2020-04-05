import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralPatientDetails } from 'src/app/models/general-patient-details.model';
import { filter, tap, delay, distinctUntilChanged, debounceTime, takeWhile, takeUntil } from 'rxjs/operators';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { Observable, Subject } from 'rxjs';
import { isEqual } from 'lodash-es';

@Component({
  selector: 'bl-general-patient-details',
  templateUrl: './general-patient-details.component.html',
  styleUrls: ['./general-patient-details.component.css']
})
export class GeneralPatientDetailsComponent implements OnInit, OnDestroy {
  generalPatientDetailsFormGroup: FormGroup;
  @Input() parentForm: FormGroup;
  @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  generalPatientDetails: Observable<GeneralPatientDetails>;
  private unsubscribe: Subject<void> = new Subject();
  constructor(private patientsService: PatientsService, private activePatientStoreService: ActivePatientStoreService) { }

  controls = {
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    phone_number: new FormControl('', Validators.required),
    medical_record_number: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    attending_physician_last_name: new FormControl('', Validators.required)
  };

  ngOnInit(): void {
    this.generalPatientDetailsFormGroup = new FormGroup({
      first_name: this.controls.first_name,
      last_name: this.controls.last_name,
      phone_number: this.controls.phone_number,
      medical_record_number: this.controls.medical_record_number,
      date_of_birth: this.controls.date_of_birth,
      attending_physician_last_name: this.controls.attending_physician_last_name
    });

    this.parentForm.addControl('generalPatientDetailsFormGroup', this.generalPatientDetailsFormGroup);

    this.generalPatientDetails = this.activePatientStoreService.generalPatientDetails$
      .pipe(
        delay(0),
        filter(generalPatientDetails => generalPatientDetails !== null && generalPatientDetails !== undefined),
        tap(generalPatientDetails => this.generalPatientDetailsFormGroup.patchValue(generalPatientDetails)));
    this.onChanges();
  }
  onChanges() {
    this.generalPatientDetailsFormGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.generalPatientDetails = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
