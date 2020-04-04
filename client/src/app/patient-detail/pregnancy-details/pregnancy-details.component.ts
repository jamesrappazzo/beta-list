import { Component, OnInit, Input } from '@angular/core';
import {
  nullable_boolean_radio_options,
  birth_control_method_options,
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
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;
  birth_control_method_options: any = birth_control_method_options.map;
  controls = {
    pregnancyDesired: new FormControl(null, Validators.required),
    rhPositive: new FormControl(null, Validators.required),
    birthControlMethod: new FormControl('', Validators.required),
  }
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
