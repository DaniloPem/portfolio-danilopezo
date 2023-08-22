import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoCompetenciasComponent } from './grupo-competencias.component';

describe('GrupoCompetenciasComponent', () => {
  let component: GrupoCompetenciasComponent;
  let fixture: ComponentFixture<GrupoCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoCompetenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
