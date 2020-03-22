import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bl-cubic-dimensions',
  templateUrl: './cubic-dimensions.component.html',
  styleUrls: ['./cubic-dimensions.component.css']
})
export class CubicDimensionsComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
