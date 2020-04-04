import { Component, OnInit } from '@angular/core';
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
import { tap, map, filter } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pipe, Observable } from 'rxjs';
@Component({
  selector: 'bl-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  constructor(private activePatientStoreService: ActivePatientStoreService, private patientsService: PatientsService) { }
  form: FormGroup;
  patient: Observable<Patient>;

  ngOnInit(): void {
    this.form = new FormGroup({});


    this.patientsService.get('5e88cf6787cd4aaefd6fc1d2')
      .subscribe((patient) => {
        this.activePatientStoreService.activePatient = patient;
        console.log(patient);
      });
    this.patient = this.activePatientStoreService.activePatient$;
  }

  onChange(form: FormGroup) {
    // reset the form value to the newly emitted form group value.
    this.form = form;
  }

}
