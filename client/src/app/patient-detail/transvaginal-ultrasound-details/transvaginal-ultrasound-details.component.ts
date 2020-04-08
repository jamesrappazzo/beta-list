import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  nullableBooleanRadioOptions, freeFluidAmountOptions, uterusOrientationOptions, adnexalMassSideOptions, adnexalMassLocationOptions
} from '../../maps/index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { delay, filter, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivePatientStoreService } from 'src/app/services/active-patient-store.service';
import { isEqual } from 'lodash-es';
import { TransvaginalUltrasound } from 'src/app/models/transvaginal-ultrasound.model';
import { Ovary } from 'src/app/models/ovary.model';
import { AdnexalMass } from 'src/app/models/adnexal-mass.model';

@Component({
  selector: 'bl-transvaginal-ultrasound-details',
  templateUrl: './transvaginal-ultrasound-details.component.html',
  styleUrls: ['./transvaginal-ultrasound-details.component.css']
})
export class TransvaginalUltrasoundDetailsComponent implements OnInit, OnDestroy {
  constructor(private activePatientStoreService: ActivePatientStoreService) { }
  freeFluidAmountOptions: any = freeFluidAmountOptions.map;
  uterusOrientationOptions: any = uterusOrientationOptions.map;
  adnexalMassSideOptions: any = adnexalMassSideOptions.map;
  adnexalMassLocationOptions: any = adnexalMassLocationOptions.map;
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  @Input() parentForm: FormGroup;
  transvaginalUltrasoundDetailsFormArray: FormArray;
  transvaginalUltrasoundDetails: Observable<TransvaginalUltrasound[]>;
  private unsubscribe: Subject<void> = new Subject();
  controls = [];

  ngOnInit(): void {

    this.transvaginalUltrasoundDetailsFormArray = new FormArray([]);
    this.parentForm.addControl('transvaginalUltrasoundDetailsFormArray', this.transvaginalUltrasoundDetailsFormArray);

    this.transvaginalUltrasoundDetails = this.activePatientStoreService.transvaginalUltrasounds$
      .pipe(
        delay(0),
        filter(transvaginalUltrasounds => transvaginalUltrasounds !== null && transvaginalUltrasounds !== undefined),
        tap(transvaginalUltrasounds => {
          this.addControlsIfMissing(transvaginalUltrasounds);
          this.transvaginalUltrasoundDetailsFormArray.patchValue(transvaginalUltrasounds);
        }));
    this.onChanges();
  }

  onChanges() {
    this.transvaginalUltrasoundDetailsFormArray.valueChanges
      .pipe(takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(isEqual))
      .subscribe(val => this.activePatientStoreService.transvaginalUltrasounds = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addControlsIfMissing(transvaginalUltrasounds) {
    if (transvaginalUltrasounds.length !== this.controls.length) {
      for (const ultrasound of transvaginalUltrasounds) {
        this.addtransvaginalUltrasoundControls(ultrasound);
      }
    }
  }

  addtransvaginalUltrasoundControls(ultrasound: TransvaginalUltrasound = null) {
    this.controls.push({
      date: new FormControl(ultrasound?.date, Validators.required),
      uterus: {
        orientation: new FormControl(ultrasound?.uterus.orientation, Validators.required),
        dimensions: new FormGroup({
          length: new FormControl(ultrasound?.uterus.dimensions.length, Validators.required),
          width: new FormControl(ultrasound?.uterus.dimensions.length, Validators.required),
          height: new FormControl(ultrasound?.uterus.dimensions.length, Validators.required),
        }),
        endometrial_thickness: new FormControl(ultrasound?.uterus.endometrial_thickness, Validators.required),
      },
      ovaries: ultrasound ? this.getOvaryControls(ultrasound.ovaries) : [],
      intra_uterine_pregnancy_present: new FormControl(ultrasound.intra_uterine_pregnancy_present, Validators.required),
      gestational_sack_size: new FormControl(ultrasound?.gestational_sack_size, Validators.required),
      yolk_sack_present: new FormControl(ultrasound?.yolk_sack_present, Validators.required),
      crown_rump_length: new FormControl(ultrasound?.crown_rump_length, Validators.required),
      fetal_heart_rate_present: new FormControl(ultrasound?.fetal_heart_rate_present, Validators.required),
      estimated_gestational_age_in_days: new FormControl(ultrasound?.estimated_gestational_age_in_days, Validators.required),
      adnexal_masses: ultrasound ? this.getAdnexalMassControls(ultrasound.adnexal_masses) : [],
      free_fluid_amount: new FormControl(ultrasound.free_fluid_amount, Validators.required),

    });

    this.transvaginalUltrasoundDetailsFormArray.push(new FormGroup(
      {
        date: this.controls[this.controls.length - 1].date,
        uterus: new FormGroup(this.controls[this.controls.length - 1].uterus),
        ovaries: new FormArray(this.controls[this.controls.length - 1].ovaries),
        intra_uterine_pregnancy_present: this.controls[this.controls.length - 1].intra_uterine_pregnancy_present,
        gestational_sack: this.controls[this.controls.length - 1].gestational_sack_size,
        yolk_sack_present: this.controls[this.controls.length - 1].yolk_sack_present,
        crown_rump_length: this.controls[this.controls.length - 1].crown_rump_length,
        fetal_heart_rate_present: this.controls[this.controls.length - 1].fetal_heart_rate_present,
        estimated_gestational_age_in_days: this.controls[this.controls.length - 1].estimated_gestational_age_in_days,
        adnexal_masses: new FormArray(this.controls[this.controls.length - 1].adnexal_masses),
        free_fluid_amount: this.controls[this.controls.length - 1].free_fluid_amount,
      }
    ));
  }

  getOvaryControls(ovaries: Ovary[]) {
    const controls = [];
    for (const ovary of ovaries) {
      controls.push(new FormGroup({
        side: new FormControl(ovary.side, Validators.required),
        present: new FormControl(ovary.present, Validators.required),
        dimensions: new FormGroup({
          length: new FormControl(ovary.dimensions.length, Validators.required),
          width: new FormControl(ovary.dimensions.length, Validators.required),
          height: new FormControl(ovary.dimensions.length, Validators.required),
        })
      }));
    }
    return controls;
  }
  getAdnexalMassControls(masses: AdnexalMass[]) {
    const controls = [];
    for (const mass of masses) {
      controls.push(new FormGroup({
        side: new FormControl(mass.side, Validators.required),
        size: new FormControl(mass.size, Validators.required),
        location: new FormControl(mass.location, Validators.required),

      }));
    }
    return controls;
  }
}
