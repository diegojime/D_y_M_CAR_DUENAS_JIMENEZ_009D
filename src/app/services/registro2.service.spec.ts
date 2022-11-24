import { TestBed } from '@angular/core/testing';

import { Registro2Service } from './registro2.service';

describe('Registro2Service', () => {
  let service: Registro2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registro2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
