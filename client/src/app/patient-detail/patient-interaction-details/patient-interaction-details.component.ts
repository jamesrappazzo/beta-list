import { Component, OnInit } from '@angular/core';
import {
  nullableBooleanRadioOptions,
} from '../../maps/index';
@Component({
  selector: 'bl-patient-interaction-details',
  templateUrl: './patient-interaction-details.component.html',
  styleUrls: ['./patient-interaction-details.component.css']
})
export class PatientInteractionDetailsComponent implements OnInit {
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;

  constructor() { }

  ngOnInit(): void {
  }

}
