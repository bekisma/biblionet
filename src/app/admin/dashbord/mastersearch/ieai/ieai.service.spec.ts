import { TestBed } from '@angular/core/testing';

import { IeaiService } from './ieai.service';

describe('IeaiService', () => {
  let service: IeaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IeaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
