import { TestBed } from '@angular/core/testing';

import { PostajobService } from './postajob.service';

describe('PostajobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostajobService = TestBed.get(PostajobService);
    expect(service).toBeTruthy();
  });
});
