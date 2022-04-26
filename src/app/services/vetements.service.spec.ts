import { TestBed } from '@angular/core/testing';

import { VetementsService } from './vetements.service';

describe('VetementsService', () => {
  let service: VetementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
