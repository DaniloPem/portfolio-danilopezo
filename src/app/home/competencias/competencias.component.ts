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
  competenciasWrapper: any[] = [
    {
      nome: 'Front-End',
      competencias: [
        { nome: 'HTML5', nivel: '90%' },
        { nome: 'CSS3', nivel: '90%' },
        { nome: 'Angular', nivel: '75%' },
        { nome: 'Javascript', nivel: '80%' },
        { nome: 'Typescript', nivel: '60%' },
        { nome: 'Java', nivel: '55%' },
      ],
      classeCss: 'front-end-competencia',
    },
    {
      nome: [
        { idioma: 'ingles', valor: 'Programming' },
        { idioma: 'portugues', valor: 'Programação' },
        { idioma: 'espanhol', valor: 'Programación' },
      ],
      competencias: [
        {
          nome: 'poo',
          nivel: '90%',
          hover: [
            { idioma: 'ingles', valor: 'Object-Oriented Programming' },
            { idioma: 'portugues', valor: 'Programação Orientada a Objetos' },
            { idioma: 'espanhol', valor: 'Programación Orientada a Objetos' },
          ],
        },
      ],
      classeCss: 'programacao-competencia',
    },
    {
      nome: [
        { idioma: 'ingles', valor: 'Database' },
        { idioma: 'portugues', valor: 'Banco de Dados' },
        { idioma: 'espanhol', valor: 'Banco de Datos' },
      ],
      competencias: [{ nome: 'MySQL', nivel: '60%' }],
      classeCss: 'banco-de-dados-competencia',
    },
  ];

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

  encontrarValorEmFuncaoDoIdioma(
    competenciaOuGrupoDeCompetencias: any,
    idioma: any,
    chave: string,
    valorPadrao?: string
  ) {
    const arrayOndeSeEncontraraOValor = competenciaOuGrupoDeCompetencias[chave];
    return Array.isArray(arrayOndeSeEncontraraOValor)
      ? arrayOndeSeEncontraraOValor.find(
          (array: any) => array.idioma === idioma
        ).valor
      : valorPadrao;
  }
}
