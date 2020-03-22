import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubicDimensionsComponent } from './cubic-dimensions.component';

describe('CubicDimensionsComponent', () => {
  let component: CubicDimensionsComponent;
  let fixture: ComponentFixture<CubicDimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubicDimensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubicDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
