import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralPatientDetails } from 'src/app/models/general-patient-details.model';
import { filter, tap, delay } from 'rxjs/operators';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'bl-general-patient-details',
  templateUrl: './general-patient-details.component.html',
  styleUrls: ['./general-patient-details.component.css']
})
export class GeneralPatientDetailsComponent implements OnInit {
  generalPatientDetailsFormGroup: FormGroup;
  @Input() parentForm: FormGroup;
  @Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  general_patient_details: Observable<GeneralPatientDetails>;
  constructor(private patientsService: PatientsService, private activePatientStoreService: ActivePatientStoreService) { }
  controls = {
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  }

  ngOnInit(): void {
    this.generalPatientDetailsFormGroup = new FormGroup({
      first_name: this.controls.first_name,
      last_name: this.controls.last_name
    });

    this.parentForm.addControl('generalPatientDetailsFormGroup', this.generalPatientDetailsFormGroup);

    this.general_patient_details = this.activePatientStoreService.generalPatientDetails$
      .pipe(
        delay(0),
        filter(generalPatientDetails => generalPatientDetails !== null && generalPatientDetails !== undefined),
        tap(generalPatientDetails => this.generalPatientDetailsFormGroup.patchValue(generalPatientDetails)));
  }


}
