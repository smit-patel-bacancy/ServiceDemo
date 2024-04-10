import { TestBed } from '@angular/core/testing';

import { ArithmeticServiceService } from './arithmetic-service.service';

describe('ArithmeticServiceService', () => {
  let service: ArithmeticServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
