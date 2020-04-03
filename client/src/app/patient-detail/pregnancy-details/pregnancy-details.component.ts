import { Component, OnInit } from '@angular/core';
import {
  nullable_boolean_radio_options,
  birth_control_method_options,
} from '../../maps/index';
@Component({
  selector: 'bl-pregnancy-details',
  templateUrl: './pregnancy-details.component.html',
  styleUrls: ['./pregnancy-details.component.css']
})
export class PregnancyDetailsComponent implements OnInit {
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;
  birth_control_method_options: any = birth_control_method_options.map;

  constructor() { }

  ngOnInit(): void {
  }

}
