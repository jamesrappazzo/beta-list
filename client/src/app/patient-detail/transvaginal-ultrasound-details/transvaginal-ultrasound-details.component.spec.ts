import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransvaginalUltrasoundDetailsComponent } from './transvaginal-ultrasound-details.component';

describe('TransvaginalUltrasoundDetailsComponent', () => {
  let component: TransvaginalUltrasoundDetailsComponent;
  let fixture: ComponentFixture<TransvaginalUltrasoundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransvaginalUltrasoundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransvaginalUltrasoundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
