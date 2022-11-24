import { TestBed } from '@angular/core/testing';

import { Registroservice } from './registroservice.service';

describe('Registroservice', () => {
  let service: Registroservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registroservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
