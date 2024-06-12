import { TestBed } from '@angular/core/testing';

import { PioneerDataService } from './pioneer-data.service';

describe('PioneerDataService', () => {
  let service: PioneerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PioneerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
