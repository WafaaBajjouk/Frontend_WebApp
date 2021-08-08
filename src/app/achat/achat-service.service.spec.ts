import { TestBed } from '@angular/core/testing';

import { AchatServiceService } from './achat-service.service';

describe('AchatServiceService', () => {
  let service: AchatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
