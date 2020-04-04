import { Component, OnInit, Input } from '@angular/core';
import {
  nullableBooleanRadioOptions,
  birthControlMethodOptions,
} from '../../maps/index';
import { Pregnancy } from 'src/app/models/pregnancy.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'bl-pregnancy-details',
  templateUrl: './pregnancy-details.component.html',
  styleUrls: ['./pregnancy-details.component.css']
})
export class PregnancyDetailsComponent implements OnInit {
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;
  birthControlMethodOptions: any = birthControlMethodOptions.map;
  controls = {
    pregnancyDesired: new FormControl(null, Validators.required),
    rhPositive: new FormControl(null, Validators.required),
    birthControlMethod: new FormControl('', Validators.required),
  };
  form: FormGroup;
  pregnancy: Pregnancy;
  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      pregnancyDesired: this.controls.pregnancyDesired,
      rhPositive: this.controls.rhPositive,
      birthControlMethod: this.controls.birthControlMethod
    });
    // this.pregnancy = this.patientsService
    //   .loadPregnancy()
    //   .pipe(tap(pregnancy => this.form.patchValue(pregnancy)));
  }


}
