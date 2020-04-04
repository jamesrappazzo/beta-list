import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service'
import {
  nullable_boolean_radio_options,
  birth_control_method_options,
  presenting_symptom_options,
  free_fluid_amount_options,
  uterus_orientation_options,
  adnexal_mass_side_options,
  adnexal_mass_location_options
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
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;
  birth_control_method_options: any = birth_control_method_options.map;
  presenting_symptom_options: any = presenting_symptom_options.map;
  free_fluid_amount_options: any = free_fluid_amount_options.map;
  uterus_orientation_options: any = uterus_orientation_options.map;
  adnexal_mass_side_options: any = adnexal_mass_side_options.map;
  adnexal_mass_location_options: any = adnexal_mass_location_options.map;
  constructor(private activePatientStoreService: ActivePatientStoreService, private patientsService: PatientsService) { }
  form: FormGroup;
  patient: Observable<Patient>;

  ngOnInit(): void {
    this.form = new FormGroup({});


    this.patientsService.get("5e88cf6787cd4aaefd6fc1d2")
      .subscribe((patient) => {
        this.activePatientStoreService.activePatient = patient;
      });
    this.patient = this.activePatientStoreService.activePatient$;
  }

  onChange(form: FormGroup) {
    // reset the form value to the newly emitted form group value.
    this.form = form;
  }

}
