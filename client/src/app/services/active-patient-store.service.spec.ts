import { TestBed } from '@angular/core/testing';

import { ActivePatientStoreService } from './active-patient-store.service';

describe('PatientStoreService', () => {
  let service: ActivePatientStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePatientStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
