import { TestBed } from '@angular/core/testing';

import { MipService } from './mip.service';

describe('MipService', () => {
  let service: MipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
