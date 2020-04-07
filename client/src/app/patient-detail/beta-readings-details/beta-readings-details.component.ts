import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  nullableBooleanRadioOptions
} from '../../maps/index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { delay, filter, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { isEqual } from 'lodash-es';
import { BetaReading } from 'src/app/models/beta-reading.model';

@Component({
  selector: 'bl-beta-readings-details',
  templateUrl: './beta-readings-details.component.html',
  styleUrls: ['./beta-readings-details.component.css']
})
export class BetaReadingsDetailsComponent implements OnInit, OnDestroy {
  constructor(private activePatientStoreService: ActivePatientStoreService) { }
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  @Input() parentForm: FormGroup;
  betaReadingsDetailsFormArray: FormArray;
  betaReadingsDetails: Observable<BetaReading[]>;
  private unsubscribe: Subject<void> = new Subject();
  controls = [];

  ngOnInit(): void {
    this.betaReadingsDetailsFormArray = new FormArray([]);
    this.parentForm.addControl('betaReadingsDetailsFormArray', this.betaReadingsDetailsFormArray);

    this.betaReadingsDetails = this.activePatientStoreService.betaReadings$
      .pipe(
        delay(0),
        filter(betaReadings => betaReadings !== null && betaReadings !== undefined),
        tap(betaReadings => {
          this.addControlsIfMissing(betaReadings);
          this.betaReadingsDetailsFormArray.patchValue(betaReadings);
        }));
    this.onChanges();
  }

  onChanges() {
    this.betaReadingsDetailsFormArray.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.betaReadings = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addControlsIfMissing(betaReadings) {
    if (betaReadings.length !== this.controls.length) {
      for (const betaReading of betaReadings) {
        this.addBetaReadingControls(betaReading.reading_date, betaReading.level);
      }
    }
  }

  addBetaReadingControls(date = '', level = null) {
    this.controls.push({
      date: new FormControl(date, Validators.required),
      level: new FormControl(level, Validators.required)
    });

    this.betaReadingsDetailsFormArray.push(new FormGroup(
      {
        date: this.controls[this.controls.length - 1].date,
        level: this.controls[this.controls.length - 1].level
      }
    ));
  }
}
