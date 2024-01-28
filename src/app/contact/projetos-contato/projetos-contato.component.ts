import { DadosComponentesService } from 'src/app/services/dados-componentes/dados-componentes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';

@Component({
  selector: 'app-projetos-contato',
  templateUrl: './projetos-contato.component.html',
  styleUrls: ['./projetos-contato.component.scss'],
})
export class ProjetosContatoComponent implements OnInit {
  listaDeProjetos!: any[];
  idioma!: Observable<string>;

  constructor(
    private idiomasService: IdiomasService,
    private dadosComponentesService: DadosComponentesService
  ) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
    this.listaDeProjetos = this.dadosComponentesService.getListaDeProjetos();
  }
}
