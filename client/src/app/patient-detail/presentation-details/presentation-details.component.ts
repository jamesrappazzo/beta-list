import { Component, OnInit } from '@angular/core';
import {
  presentingSymptomOptions
} from '../../maps/index';
@Component({
  selector: 'bl-presentation-details',
  templateUrl: './presentation-details.component.html',
  styleUrls: ['./presentation-details.component.css']
})
export class PresentationDetailsComponent implements OnInit {
  presentingSymptomOptions: any = presentingSymptomOptions.map;

  constructor() { }

  ngOnInit(): void {
  }

}
