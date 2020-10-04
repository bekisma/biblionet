import { TestBed } from '@angular/core/testing';

import { SanService } from './san.service';

describe('SanService', () => {
  let service: SanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
