import { TestBed } from '@angular/core/testing';

import { MainGeftService } from './main-geft.service';

describe('MainGeftService', () => {
  let service: MainGeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainGeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
