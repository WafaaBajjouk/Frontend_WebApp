import { TestBed } from '@angular/core/testing';

import { CommandeserviceService } from './commandeservice.service';

describe('CommandeserviceService', () => {
  let service: CommandeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
