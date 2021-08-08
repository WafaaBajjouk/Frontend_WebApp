import { TestBed } from '@angular/core/testing';

import { FournServiceService } from './fourn-service.service';

describe('FournServiceService', () => {
  let service: FournServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FournServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
