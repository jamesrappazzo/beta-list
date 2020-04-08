import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MethotrexateDetailsComponent } from './methotrexate-details.component';


describe('BetaDetailsComponent', () => {
  let component: MethotrexateDetailsComponent;
  let fixture: ComponentFixture<MethotrexateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MethotrexateDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethotrexateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
