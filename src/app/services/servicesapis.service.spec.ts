import { TestBed } from '@angular/core/testing';

import { ServicesapisService } from './servicesapis.service';

describe('ServicesapisService', () => {
  let service: ServicesapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
