import { Component, OnInit } from '@angular/core';
import {
  nullable_boolean_radio_options,
  free_fluid_amount_options,
  uterus_orientation_options,
  adnexal_mass_side_options,
  adnexal_mass_location_options
} from '../../maps/index';
@Component({
  selector: 'bl-transvaginal-ultrasound-details',
  templateUrl: './transvaginal-ultrasound-details.component.html',
  styleUrls: ['./transvaginal-ultrasound-details.component.css']
})
export class TransvaginalUltrasoundDetailsComponent implements OnInit {
  free_fluid_amount_options: any = free_fluid_amount_options.map;
  uterus_orientation_options: any = uterus_orientation_options.map;
  adnexal_mass_side_options: any = adnexal_mass_side_options.map;
  adnexal_mass_location_options: any = adnexal_mass_location_options.map;
  nullable_boolean_radio_options: any = nullable_boolean_radio_options.map;

  constructor() { }

  ngOnInit(): void {
  }

}
