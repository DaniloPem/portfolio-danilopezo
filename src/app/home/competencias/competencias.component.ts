import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss'],
})
export class CompetenciasComponent implements OnInit {

  competenciasWrapper = [
    {
      nome: 'Front-end',
      competencias: [
        { nome: 'html5', nivel: '70%' },
        { nome: 'css3', nivel: '70%' },
        { nome: 'angular', nivel: '50%' },
        { nome: 'javascript', nivel: '70%' },
        { nome: 'typescript', nivel: '70%' },
        { nome: 'java', nivel: '30%' },
      ],
      classeCss: 'front-end-competencia'
    },
    {
      nome: 'Programacao',
      competencias: [{ nome: 'poo', nivel: '70%' }],
      classeCss: 'programacao-competencia'
    },
    {
      nome: 'Banco de dados',
      competencias: [{ nome: 'mysql', nivel: '30%' }],
      classeCss: 'banco-de-dados-competencia'
    },
  ];
  competenciasKeys = Object.keys(this.competenciasWrapper);

  idiomas = [
    { nome: 'espanhol', nivel: '100%' },
    { nome: 'portugues', nivel: '80%' },
    { nome: 'ingles', nivel: '20%' },
  ];

  idioma!: Observable<string>;

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }
}
