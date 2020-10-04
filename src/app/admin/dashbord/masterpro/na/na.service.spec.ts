import { TestBed } from '@angular/core/testing';

import { NaService } from './na.service';

describe('NaService', () => {
  let service: NaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
