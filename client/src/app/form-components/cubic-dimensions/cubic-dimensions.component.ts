import { Component, OnInit, Input } from '@angular/core';
import { CubicDimensions } from 'src/app/models/dimensions.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bl-cubic-dimensions',
  templateUrl: './cubic-dimensions.component.html',
  styleUrls: ['./cubic-dimensions.component.css']
})
export class CubicDimensionsComponent implements OnInit {
  @Input() label: string;
  @Input() controls: any;
  constructor() { }

  ngOnInit(): void {
  }

}
