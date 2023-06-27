import { TestBed } from '@angular/core/testing';

import { EstiloNavegacaoService } from './estilo-navegacao.service';

describe('EstiloNavegacaoService', () => {
  let service: EstiloNavegacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstiloNavegacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
