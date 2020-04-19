import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { CustomMaterialModule } from './material.module';
import { RadioGroupComponent } from './form-components/radio-group/radio-group.component';
import { DatePickerComponent } from './form-components/date-picker/date-picker.component';
import { InputComponent } from './form-components/input/input.component';
import { SelectComponent } from './form-components/select/select.component';
import { CubicDimensionsComponent } from './form-components/cubic-dimensions/cubic-dimensions.component';
import { SlideToggleComponent } from './form-components/slide-toggle/slide-toggle.component';
import { TextAreaComponent } from './form-components/text-area/text-area.component';
import { PresentationDetailsComponent } from './patient-detail/presentation-details/presentation-details.component';
import {
  TransvaginalUltrasoundDetailsComponent
} from './patient-detail/transvaginal-ultrasound-details/transvaginal-ultrasound-details.component';
import { PregnancyDetailsComponent } from './patient-detail/pregnancy-details/pregnancy-details.component';
import { PatientInteractionDetailsComponent } from './patient-detail/patient-interactions-details/patient-interactions-details.component';
import { GeneralPatientDetailsComponent } from './patient-detail/general-patient-details/general-patient-details.component';
import { FollowUpDetailsComponent } from './patient-detail/follow-up-details/follow-up-details.component';
import { BetaReadingsDetailsComponent } from './patient-detail/beta-readings-details/beta-readings-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsService } from './services/patients.service';
import { ActivePatientStoreService } from './services/active-patient-store.service';
import { PathologyResultsDetailsComponent } from './patient-detail/pathology-details/pathology-details.component';
import { MethotrexateDetailsComponent } from './patient-detail/methotrexate-details/methotrexate-details.component';
import { ExpansionPanelComponent } from './form-components/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailComponent,
    RadioGroupComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
    CubicDimensionsComponent,
    SlideToggleComponent,
    TextAreaComponent,
    PresentationDetailsComponent,
    TransvaginalUltrasoundDetailsComponent,
    PregnancyDetailsComponent,
    PatientInteractionDetailsComponent,
    GeneralPatientDetailsComponent,
    FollowUpDetailsComponent,
    BetaReadingsDetailsComponent,
    MethotrexateDetailsComponent,
    PathologyResultsDetailsComponent,
    ExpansionPanelComponent],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PatientsService, ActivePatientStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
