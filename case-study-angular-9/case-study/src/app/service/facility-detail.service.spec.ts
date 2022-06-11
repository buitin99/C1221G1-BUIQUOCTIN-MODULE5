import { TestBed } from '@angular/core/testing';

import { FacilityDetailService } from './facility-detail.service';

describe('FacilityDetailService', () => {
  let service: FacilityDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
