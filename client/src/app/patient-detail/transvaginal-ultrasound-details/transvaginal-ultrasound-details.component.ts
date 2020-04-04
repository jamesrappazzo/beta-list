import { Component, OnInit } from '@angular/core';
import {
  nullableBooleanRadioOptions,
  freeFluidAmountOptions,
  uterusOrientationOptions,
  adnexalMassLocationOptions,
  adnexalMassSideOptions
} from '../../maps/index';
@Component({
  selector: 'bl-transvaginal-ultrasound-details',
  templateUrl: './transvaginal-ultrasound-details.component.html',
  styleUrls: ['./transvaginal-ultrasound-details.component.css']
})
export class TransvaginalUltrasoundDetailsComponent implements OnInit {
  freeFluidAmountOptions: any = freeFluidAmountOptions.map;
  uterusOrientationOptions: any = uterusOrientationOptions.map;
  adnexalMassSideOptions: any = adnexalMassSideOptions.map;
  adnexalMassLocationOptions: any = adnexalMassLocationOptions.map;
  nullableBooleanRadioOptions: any = nullableBooleanRadioOptions.map;

  constructor() { }

  ngOnInit(): void {
  }

}
