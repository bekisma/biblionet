import { TestBed } from '@angular/core/testing';

import { IngenierieService } from './ingenierie.service';

describe('IngenierieService', () => {
  let service: IngenierieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngenierieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
