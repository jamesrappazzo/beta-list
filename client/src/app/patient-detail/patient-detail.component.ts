import { Component, OnInit, OnDestroy } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import {
  nullableBooleanRadioOptions,
  birthControlMethodOptions,
  presentingSymptomOptions,
  freeFluidAmountOptions,
  uterusOrientationOptions,
  adnexalMassSideOptions,
  adnexalMassLocationOptions
} from '../maps/index';
import { Patient } from '../models/patient.model';
import { ActivePatientStoreService } from '../services/active-patient-store.service';
import { tap, map, filter, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pipe, Observable, Subject } from 'rxjs';

@Component({
  selector: 'bl-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit, OnDestroy {
  constructor(private activePatientStoreService: ActivePatientStoreService, private patientsService: PatientsService) { }
  form: FormGroup;
  patient: Observable<Patient>;
  private unsubscribe: Subject<void> = new Subject();

  ngOnInit(): void {
    this.form = new FormGroup({});


    this.patientsService.get('5e89304487cd4aaefd6fc1dc').pipe(takeUntil(this.unsubscribe))
      .subscribe((patient) => {
        this.activePatientStoreService.activePatient = patient;
        console.log(patient);
      });
    this.patient = this.activePatientStoreService.activePatient$;
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // onChange(form: FormGroup) {
  //   // reset the form value to the newly emitted form group value.
  //   this.form = form;
  // }

}
