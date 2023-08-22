import { TestBed } from '@angular/core/testing';

import { DadosComponentesService } from './dados-componentes.service';

describe('DadosComponentesService', () => {
  let service: DadosComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
