import { Component, OnInit } from '@angular/core';
import {
  nullable_boolean_radio_options,
} from '../../maps/index';
@Component({
  selector: 'bl-patient-interaction-details',
  templateUrl: './patient-interaction-details.component.html',
  styleUrls: ['./patient-interaction-details.component.css']
})
export class PatientInteractionDetailsComponent implements OnInit {
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;

  constructor() { }

  ngOnInit(): void {
  }

}
