import { Component, OnInit } from '@angular/core';
import {
  nullable_boolean_radio_options,
  birth_control_method_options,
  presenting_symptom_options,
  free_fluid_amount_options,
  uterus_orientation_options
} from '../maps/index';
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
  constructor() { }

  ngOnInit(): void {
    console.log(this.nullable_boolean_radio_options)

  }

}
