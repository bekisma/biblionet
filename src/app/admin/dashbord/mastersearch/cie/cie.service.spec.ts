import { TestBed } from '@angular/core/testing';

import { CieService } from './cie.service';

describe('CieService', () => {
  let service: CieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
