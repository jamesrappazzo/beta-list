import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
