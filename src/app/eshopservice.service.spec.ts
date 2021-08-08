import { TestBed } from '@angular/core/testing';

import { EshopserviceService } from './eshop/eshopservice.service';

describe('EshopserviceService', () => {
  let service: EshopserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EshopserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
