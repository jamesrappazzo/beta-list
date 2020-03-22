import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bl-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
