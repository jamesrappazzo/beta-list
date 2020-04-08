import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  nullableBooleanRadioOptions
} from '../../maps/index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { delay, filter, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { isEqual } from 'lodash-es';
import { MethotrexateDose } from 'src/app/models/methotrexate-dose.model';

@Component({
  selector: 'bl-methotrexate-details',
  templateUrl: './methotrexate-details.component.html',
  styleUrls: ['./methotrexate-details.component.css']
})
export class MethotrexateDetailsComponent implements OnInit, OnDestroy {
  constructor(private activePatientStoreService: ActivePatientStoreService) { }
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  @Input() parentForm: FormGroup;
  methotrexateDetailsFormArray: FormArray;
  methotrexateDetails: Observable<MethotrexateDose[]>;
  private unsubscribe: Subject<void> = new Subject();
  controls = [];

  ngOnInit(): void {
    this.methotrexateDetailsFormArray = new FormArray([]);
    this.parentForm.addControl('methotrexateDetailsFormArray', this.methotrexateDetailsFormArray);

    this.methotrexateDetails = this.activePatientStoreService.methotrexateDoses$
      .pipe(
        delay(0),
        filter(methotrexateDoses => methotrexateDoses !== null && methotrexateDoses !== undefined),
        tap(methotrexateDoses => {
          this.addControlsIfMissing(methotrexateDoses);
          this.methotrexateDetailsFormArray.patchValue(methotrexateDoses);
        }));
    this.onChanges();
  }

  onChanges() {
    this.methotrexateDetailsFormArray.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.methotrexateDoses = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addControlsIfMissing(methotrexateDoses) {
    if (methotrexateDoses.length !== this.controls.length) {
      for (const dose of methotrexateDoses) {
        this.addmethotrexateDoseControls(dose.date, dose.quantiy);
      }
    }
  }

  addmethotrexateDoseControls(date = '', quantity = null) {
    this.controls.push({
      date: new FormControl(date, Validators.required),
      quantity: new FormControl(quantity, Validators.required)
    });

    this.methotrexateDetailsFormArray.push(new FormGroup(
      {
        date: this.controls[this.controls.length - 1].date,
        quantity: this.controls[this.controls.length - 1].quantity
      }
    ));
  }
}
