import { TestBed } from '@angular/core/testing';

import { SimeService } from './sime.service';

describe('SimeService', () => {
  let service: SimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
