import { TestBed } from '@angular/core/testing';

import { SaverouteService } from './saveroute.service';

describe('SaverouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaverouteService = TestBed.get(SaverouteService);
    expect(service).toBeTruthy();
  });
});
