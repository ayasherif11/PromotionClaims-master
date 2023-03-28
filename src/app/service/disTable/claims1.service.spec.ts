import { TestBed } from '@angular/core/testing';

import { Claims1Service } from './claims1.service';

describe('Claims1Service', () => {
  let service: Claims1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Claims1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
