import { TestBed } from '@angular/core/testing';

import { JobResultsService } from './job-results.service';

describe('JobResultsService', () => {
  let service: JobResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
