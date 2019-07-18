import { TestBed } from '@angular/core/testing';

import { CustomerrequestsService } from './customerrequests.service';

describe('CustomerrequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerrequestsService = TestBed.get(CustomerrequestsService);
    expect(service).toBeTruthy();
  });
});
