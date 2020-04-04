import { Component, OnInit, Input } from '@angular/core';
import { CubicDimensions } from 'src/app/models/dimensions.model';

@Component({
  selector: 'bl-cubic-dimensions',
  templateUrl: './cubic-dimensions.component.html',
  styleUrls: ['./cubic-dimensions.component.css']
})
export class CubicDimensionsComponent implements OnInit {
  @Input() label: string;
  @Input() dimensions: CubicDimensions
  constructor() { }

  ngOnInit(): void {
  }

}
