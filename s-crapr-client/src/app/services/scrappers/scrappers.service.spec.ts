import { TestBed } from '@angular/core/testing';

import { ScrappersService } from './scrappers.service';

describe('ScrappersService', () => {
  let service: ScrappersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrappersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
