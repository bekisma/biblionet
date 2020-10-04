import { TestBed } from '@angular/core/testing';

import { IaaService } from './iaa.service';

describe('IaaService', () => {
  let service: IaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
