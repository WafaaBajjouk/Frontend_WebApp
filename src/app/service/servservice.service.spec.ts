import { TestBed } from '@angular/core/testing';

import { ServserviceService } from './servservice.service';

describe('ServserviceService', () => {
  let service: ServserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
