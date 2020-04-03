import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { TransvaginalUltrasoundDetailsComponent } from './patient-detail/transvaginal-ultrasound-details/transvaginal-ultrasound-details.component';
import { PregnancyDetailsComponent } from './patient-detail/pregnancy-details/pregnancy-details.component';
import { PatientInteractionDetailsComponent } from './patient-detail/patient-interaction-details/patient-interaction-details.component';
import { GeneralPatientDetailsComponent } from './patient-detail/general-patient-details/general-patient-details.component';
import { FollowUpDetailsComponent } from './patient-detail/follow-up-details/follow-up-details.component';
import { BetaDetailsComponent } from './patient-detail/beta-details/beta-details.component';

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
    BetaDetailsComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
