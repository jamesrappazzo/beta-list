import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'bl-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit {
  @Input() options: Map<string, boolean | null>;
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }


  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => 0;
}
