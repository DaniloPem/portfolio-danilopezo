import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss'],
})
export class CompetenciasComponent implements OnInit {
  competenciasWrapper = [
    {
      nome: 'Front-End',
      competencias: [
        { nome: 'html5', nivel: '90%' },
        { nome: 'css3', nivel: '90%' },
        { nome: 'angular', nivel: '75%' },
        { nome: 'javascript', nivel: '80%' },
        { nome: 'typescript', nivel: '60%' },
        { nome: 'java', nivel: '55%' },
      ],
      classeCss: 'front-end-competencia',
    },
    {
      nome: [
        { idioma: 'ingles', valor: 'Programming' },
        { idioma: 'portugues', valor: 'Programação' },
        { idioma: 'espanhol', valor: 'Programación' },
      ],
      competencias: [{ nome: 'poo', nivel: '90%' }],
      classeCss: 'programacao-competencia',
    },
    {
      nome: [
        { idioma: 'ingles', valor: 'Database' },
        { idioma: 'portugues', valor: 'Banco de Dados' },
        { idioma: 'espanhol', valor: 'Banco de Datos' },
      ],
      competencias: [{ nome: 'mysql', nivel: '60%' }],
      classeCss: 'banco-de-dados-competencia',
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

  renderizarNomeGrupoCompetencias(grupoCompetencia: any, idioma: any) {
    const arrayNomeCompetencias: Array<any> = grupoCompetencia.nome;
    return Array.isArray(arrayNomeCompetencias) ?
     arrayNomeCompetencias.find(nomeCompetencia => nomeCompetencia.idioma === idioma).valor :
     arrayNomeCompetencias;
  }
}
