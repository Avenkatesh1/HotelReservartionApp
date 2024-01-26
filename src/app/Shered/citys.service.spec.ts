import { TestBed } from '@angular/core/testing';

import { CitysService } from './citys.service';

describe('CitysService', () => {
  let service: CitysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
