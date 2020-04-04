import { Component, OnInit } from '@angular/core';
import {
  nullableBooleanRadioOptions,
} from '../../maps/index';
@Component({
  selector: 'bl-follow-up-details',
  templateUrl: './follow-up-details.component.html',
  styleUrls: ['./follow-up-details.component.css']
})
export class FollowUpDetailsComponent implements OnInit {
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;

  constructor() { }

  ngOnInit(): void {
  }

}
