import { TestBed } from '@angular/core/testing';

import { VerifyTasksService } from './verify-tasks.service';

describe('VerifyTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyTasksService = TestBed.get(VerifyTasksService);
    expect(service).toBeTruthy();
  });
});
