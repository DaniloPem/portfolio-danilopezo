import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { COMPETENCIAS_WRAPPER } from 'src/app/shared/competencias.const';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss'],
})
export class CompetenciasComponent implements OnInit {
  competenciasWrapper: any[] = COMPETENCIAS_WRAPPER;
  idiomas = [
    {
      nome: [
        { idioma: 'ingles', valor: 'Languages' },
        { idioma: 'portugues', valor: 'Idiomas' },
        { idioma: 'espanhol', valor: 'Idiomas' },
      ],
    },
    {
      competencias: [
        {
          nome: [
            { idioma: 'ingles', valor: 'Spanish' },
            { idioma: 'portugues', valor: 'Espanhol' },
            { idioma: 'espanhol', valor: 'Español' },
          ],
          nivel: '100%',
        },
        {
          nome: [
            { idioma: 'ingles', valor: 'Portuguese' },
            { idioma: 'portugues', valor: 'Português' },
            { idioma: 'espanhol', valor: 'Portugués' },
          ],
          nivel: '80%',
        },
        {
          nome: [
            { idioma: 'ingles', valor: 'English' },
            { idioma: 'portugues', valor: 'Inglês' },
            { idioma: 'espanhol', valor: 'Inglés' },
          ],
          nivel: '20%',
        },
      ],
    },
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
