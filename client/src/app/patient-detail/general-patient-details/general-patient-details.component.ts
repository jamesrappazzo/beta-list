import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'bl-general-patient-details',
  templateUrl: './general-patient-details.component.html',
  styleUrls: ['./general-patient-details.component.css']
})
export class GeneralPatientDetailsComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

}
