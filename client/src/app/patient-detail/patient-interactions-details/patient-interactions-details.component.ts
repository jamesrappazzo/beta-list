import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  nullableBooleanRadioOptions, doctorVisitActionOptions, emergencyDepartmentActionOptions, phoneCallResultOptions
} from '../../maps/index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { delay, filter, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { isEqual } from 'lodash-es';
import { PatientInteraction } from 'src/app/models/patient-interaction.model';
import { doctor_visit_actions, patient_interaction_types } from 'src/app/constants';
@Component({
  selector: 'bl-patient-interaction-details',
  templateUrl: './patient-interactions-details.component.html',
  styleUrls: ['./patient-interactions-details.component.css']
})
export class PatientInteractionDetailsComponent implements OnInit, OnDestroy {
  patientInteractionsFormArray: FormArray;
  @Input() parentForm: FormGroup;
  patientInteractions: Observable<PatientInteraction[]>;
  private unsubscribe: Subject<void> = new Subject();
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  doctorVisitActionOptions: any = doctorVisitActionOptions.map;
  phoneCallResultOptions: any = phoneCallResultOptions.map;
  emergencyDepartmentActionOptions: any = emergencyDepartmentActionOptions.map;
  constructor(private activePatientStoreService: ActivePatientStoreService) { }

  controls = [];

  ngOnInit(): void {
    this.patientInteractionsFormArray = new FormArray([]);

    this.parentForm.addControl('patientInteractionsFormArray', this.patientInteractionsFormArray);

    this.patientInteractions = this.activePatientStoreService.patientInteractions$
      .pipe(
        delay(0),
        filter(patientInteractions => patientInteractions !== null && patientInteractions !== undefined),
        tap(patientInteractions => {
          this.addControlsIfMissing(patientInteractions);
          this.patientInteractionsFormArray.patchValue(patientInteractions);
        }));
    this.onChanges();
  }
  onChanges() {
    this.patientInteractionsFormArray.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.patientInteractions = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  addControlsIfMissing(patientInteractions) {
    if (patientInteractions.length !== this.controls.length) {
      for (const interaction of patientInteractions) {
        this.addPatientInteractionControls(interaction);
      }
    }
  }

  addPatientInteractionControls(interaction: PatientInteraction = null) {
    this.controls.push({
      date: new FormControl(interaction?.date, Validators.required),
      interaction_type: new FormControl(interaction?.interaction_type, Validators.required),
      options: interaction ? this.getInteractionOptions(interaction) : {}
    });

    this.patientInteractionsFormArray.push(new FormGroup(
      {
        date: this.controls[this.controls.length - 1].date,
        interaction_type: this.controls[this.controls.length - 1].interaction_type,
        options: new FormGroup(this.controls[this.controls.length - 1].options)
      }
    ));
  }
  getInteractionOptions(interaction: PatientInteraction) {
    switch (interaction.interaction_type) {
      case patient_interaction_types.values.DoctorVisit:
        return {
          actions: new FormControl(interaction.options.actions, Validators.required)
        };
      case patient_interaction_types.values.CertifiedLetter:
        return {};
      case patient_interaction_types.values.EmergencyDepartmentVisit:
        return {
          actions: new FormControl(interaction.options.actions, Validators.required)
        };
      case patient_interaction_types.values.PhoneCall:
        return {
          phone_number_called: new FormControl(interaction.options.phone_number_called, Validators.required),
          result: new FormControl(interaction.options.result, Validators.required)
        };
    }
  }

}
