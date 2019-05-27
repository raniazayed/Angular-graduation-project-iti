import { TestBed } from '@angular/core/testing';

import { UploadimgService } from './uploadimg.service';

describe('UploadimgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadimgService = TestBed.get(UploadimgService);
    expect(service).toBeTruthy();
  });
});
