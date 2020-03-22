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

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailComponent,
    RadioGroupComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
    CubicDimensionsComponent,
    SlideToggleComponent
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
