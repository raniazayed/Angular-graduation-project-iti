import { TestBed } from '@angular/core/testing';

import { FreelancerRequestsService } from './freelancer-requests.service';

describe('FreelancerRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreelancerRequestsService = TestBed.get(FreelancerRequestsService);
    expect(service).toBeTruthy();
  });
});
