import { TestBed } from '@angular/core/testing';

import { EnvioUrlService } from './envio-url.service';

describe('EnvioUrlService', () => {
  let service: EnvioUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
