import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDetallesComponent } from './dados-detalles.component';

describe('DadosDetallesComponent', () => {
  let component: DadosDetallesComponent;
  let fixture: ComponentFixture<DadosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
