import { TestBed } from '@angular/core/testing';

import { ChatingService } from './chating.service';

describe('ChatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatingService = TestBed.get(ChatingService);
    expect(service).toBeTruthy();
  });
});
