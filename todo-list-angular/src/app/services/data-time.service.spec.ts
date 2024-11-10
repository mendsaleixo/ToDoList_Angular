import { TestBed } from '@angular/core/testing';

import { DateTimeService } from '../services/data-time.service';

describe('DataTimeService', () => {
  let service: DateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
