import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPatientDetailsComponent } from './pathology-details.component';

describe('GeneralPatientDetailsComponent', () => {
  let component: GeneralPatientDetailsComponent;
  let fixture: ComponentFixture<GeneralPatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPatientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
