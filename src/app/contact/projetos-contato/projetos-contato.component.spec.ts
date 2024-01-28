import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosContatoComponent } from './projetos-contato.component';

describe('ProjetosContatoComponent', () => {
  let component: ProjetosContatoComponent;
  let fixture: ComponentFixture<ProjetosContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
