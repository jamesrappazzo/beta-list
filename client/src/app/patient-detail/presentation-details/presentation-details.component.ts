import { Component, OnInit } from '@angular/core';
import {
  presenting_symptom_options
} from '../../maps/index';
@Component({
  selector: 'bl-presentation-details',
  templateUrl: './presentation-details.component.html',
  styleUrls: ['./presentation-details.component.css']
})
export class PresentationDetailsComponent implements OnInit {
  presenting_symptom_options: any = presenting_symptom_options.map;

  constructor() { }

  ngOnInit(): void {
  }

}
