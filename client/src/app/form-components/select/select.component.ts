import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'bl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() options: Map<string, any | null>;
  @Input() label: string;
  @Input() multiple: boolean;
  @Input() control: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => 0;

}
