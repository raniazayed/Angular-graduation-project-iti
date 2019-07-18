import { TestBed } from '@angular/core/testing';

import { VerifyUsersService } from './verify-users.service';

describe('VerifyUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyUsersService = TestBed.get(VerifyUsersService);
    expect(service).toBeTruthy();
  });
});
