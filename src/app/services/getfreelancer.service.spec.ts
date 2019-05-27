import { TestBed } from '@angular/core/testing';

import { GetfreelancerService } from './getfreelancer.service';

describe('GetfreelancerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfreelancerService = TestBed.get(GetfreelancerService);
    expect(service).toBeTruthy();
  });
});
