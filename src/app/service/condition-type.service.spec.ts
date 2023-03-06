import { TestBed } from '@angular/core/testing';

import { ConditionTypeService } from './condition-type.service';

describe('ConditionTypeService', () => {
  let service: ConditionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
