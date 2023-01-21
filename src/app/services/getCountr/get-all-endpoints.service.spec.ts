import { TestBed } from '@angular/core/testing';

import { GetAllEndpointsService } from './get-all-endpoints.service';

describe('GetAllEndpointsService', () => {
  let service: GetAllEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
