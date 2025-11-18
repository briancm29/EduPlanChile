import { TestBed } from '@angular/core/testing';

import { Planificacion } from './planificacion';

describe('Planificacion', () => {
  let service: Planificacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Planificacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
