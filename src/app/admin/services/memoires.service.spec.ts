import { TestBed } from '@angular/core/testing';

import { MemoiresService } from './memoires.service';

describe('MemoiresService', () => {
  let service: MemoiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
