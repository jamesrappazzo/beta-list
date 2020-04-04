import { Component, OnInit } from '@angular/core';
import {
  nullableBooleanRadioOptions
} from '../../maps/index';
@Component({
  selector: 'bl-beta-details',
  templateUrl: './beta-details.component.html',
  styleUrls: ['./beta-details.component.css']
})
export class BetaDetailsComponent implements OnInit {
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;

  constructor() { }

  ngOnInit(): void {
  }

}
