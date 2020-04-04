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
  controls = {
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: this.controls.first_name,
      last_name: this.controls.last_name,
    });


    this.patientsService.get("5e876d0087cd4aaefd6fc1bd")
      .subscribe((patient) => this.activePatientStoreService.activePatient = patient);

    this.patient = this.activePatientStoreService.activePatient$
      .pipe(filter(patient => patient !== null && patient !== undefined), tap(patient =>{
        this.form.patchValue(patient);
        console.log(patient)}));

  }

}
