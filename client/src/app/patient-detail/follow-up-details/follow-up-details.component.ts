import { Component, OnInit } from '@angular/core';
import {
  nullable_boolean_radio_options,
} from '../../maps/index';
@Component({
  selector: 'bl-follow-up-details',
  templateUrl: './follow-up-details.component.html',
  styleUrls: ['./follow-up-details.component.css']
})
export class FollowUpDetailsComponent implements OnInit {
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;

  constructor() { }

  ngOnInit(): void {
  }

}
