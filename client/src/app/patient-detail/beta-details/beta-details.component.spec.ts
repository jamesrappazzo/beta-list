import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaDetailsComponent } from './beta-details.component';

describe('BetaDetailsComponent', () => {
  let component: BetaDetailsComponent;
  let fixture: ComponentFixture<BetaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
