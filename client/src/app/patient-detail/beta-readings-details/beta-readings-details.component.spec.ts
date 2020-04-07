import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaReadingsDetailsComponent } from './beta-readings-details.component';

describe('BetaDetailsComponent', () => {
  let component: BetaReadingsDetailsComponent;
  let fixture: ComponentFixture<BetaReadingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaReadingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaReadingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
