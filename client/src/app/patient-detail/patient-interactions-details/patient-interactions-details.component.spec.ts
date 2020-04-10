import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInteractionDetailsComponent } from './patient-interactions-details.component';

describe('PatientInteractionDetailsComponent', () => {
  let component: PatientInteractionDetailsComponent;
  let fixture: ComponentFixture<PatientInteractionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInteractionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInteractionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
