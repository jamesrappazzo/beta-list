import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  nullableBooleanRadioOptions,
} from '../../maps/index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PathologyResults } from 'src/app/models/pathology-results.model';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { delay, filter, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { isEqual } from 'lodash-es';
import { MethotrexateDose } from 'src/app/models/methotrexate-dose.model';
import { FollowUpPlan } from 'src/app/models/follow-up-plan.model';
@Component({
  selector: 'bl-follow-up-details',
  templateUrl: './follow-up-details.component.html',
  styleUrls: ['./follow-up-details.component.css']
})
export class FollowUpDetailsComponent implements OnInit, OnDestroy {
  constructor(private activePatientStoreService: ActivePatientStoreService) { }
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  @Input() parentForm: FormGroup;
  followUpPlansFormArray: FormArray;
  followUpPlans: Observable<FollowUpPlan[]>;
  private unsubscribe: Subject<void> = new Subject();
  controls = [];

  ngOnInit(): void {
    this.followUpPlansFormArray = new FormArray([]);
    this.parentForm.addControl('followUpPlansFormArray', this.followUpPlansFormArray);

    this.followUpPlans = this.activePatientStoreService.followUpPlans$
      .pipe(
        delay(0),
        filter(followUpPlans => followUpPlans !== null && followUpPlans !== undefined),
        tap(followUpPlans => {
          this.addControlsIfMissing(followUpPlans);
          this.followUpPlansFormArray.patchValue(followUpPlans);
        }));
    this.onChanges();
  }

  onChanges() {
    this.followUpPlansFormArray.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.followUpPlans = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addControlsIfMissing(followUpPlans) {
    if (followUpPlans.length !== this.controls.length) {
      for (const plan of followUpPlans) {
        this.addFollowUpPlanControls(plan);
      }
    }
  }

  addFollowUpPlanControls(followUpPlan) {
    this.controls.push({
      start_date: new FormControl(followUpPlan?.start_date, Validators.required),
      due_date: new FormControl(followUpPlan?.due_date, Validators.required),
      repeat_beta: new FormControl(followUpPlan?.repeat_beta, Validators.required),
      sonogram: new FormControl(followUpPlan?.sonogram, Validators.required),
      mva: new FormControl(followUpPlan?.mva, Validators.required),
      family_planning_appointment: new FormControl(followUpPlan?.family_planning_appointment, Validators.required),
      refer_to_prenatal_care: new FormControl(followUpPlan?.refer_to_prenatal_care, Validators.required),
    });

    this.followUpPlansFormArray.push(new FormGroup(
      {
        start_date: this.controls[this.controls.length - 1].start_date,
        due_date: this.controls[this.controls.length - 1].due_date,
        repeat_beta: this.controls[this.controls.length - 1].repeat_beta,
        sonogram: this.controls[this.controls.length - 1].sonogram,
        mva: this.controls[this.controls.length - 1].mva,
        family_planning_appointment: this.controls[this.controls.length - 1].family_planning_appointment,
        refer_to_prenatal_care: this.controls[this.controls.length - 1].refer_to_prenatal_care
      }
    ));
  }
}
