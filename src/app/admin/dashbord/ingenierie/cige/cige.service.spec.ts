import { TestBed } from '@angular/core/testing';

import { CigeService } from './cige.service';

describe('CigeService', () => {
  let service: CigeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CigeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
