import { Component, OnInit } from '@angular/core';
import {
  nullable_boolean_radio_options
} from '../../maps/index';
@Component({
  selector: 'bl-beta-details',
  templateUrl: './beta-details.component.html',
  styleUrls: ['./beta-details.component.css']
})
export class BetaDetailsComponent implements OnInit {
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;

  constructor() { }

  ngOnInit(): void {
  }

}
