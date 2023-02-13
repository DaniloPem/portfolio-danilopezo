import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoProjetoComponent } from './descricao-projeto.component';

describe('DescricaoProjetoComponent', () => {
  let component: DescricaoProjetoComponent;
  let fixture: ComponentFixture<DescricaoProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
