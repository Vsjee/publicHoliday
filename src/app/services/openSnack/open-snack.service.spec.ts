import { TestBed } from '@angular/core/testing';

import { OpenSnackService } from './open-snack.service';

describe('OpenSnackService', () => {
  let service: OpenSnackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSnackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
