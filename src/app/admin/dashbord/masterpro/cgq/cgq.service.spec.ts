import { TestBed } from '@angular/core/testing';

import { CgqService } from './cgq.service';

describe('CgqService', () => {
  let service: CgqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
