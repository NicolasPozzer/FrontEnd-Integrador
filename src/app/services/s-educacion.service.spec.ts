import { TestBed } from '@angular/core/testing';

import { SEducacionService } from './s-educacion.service';

describe('SEducacionService', () => {
  let service: SEducacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEducacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
