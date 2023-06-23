import { Observable } from 'rxjs';
import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-descricao-projeto',
  templateUrl: './descricao-projeto.component.html',
  styleUrls: ['./descricao-projeto.component.scss']
})
export class DescricaoProjetoComponent implements OnInit {
  posicaoDaImagem: number = 0;
  numeroTotalDeImagens: number = this.projeto.imagens.length;
  idioma!: Observable<String>;

  constructor(public dialogRef: MatDialogRef<DescricaoProjetoComponent>, @Inject(MAT_DIALOG_DATA) public projeto: any, private idiomasService: IdiomasService) { }

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }


  mostrarProximaImagem() {
    this.posicaoDaImagem === this.numeroTotalDeImagens - 1 ? this.posicaoDaImagem = 0 : this.posicaoDaImagem++;
  }

  mostrarImagemAnterior() {
    this.posicaoDaImagem === 0 ? this.posicaoDaImagem = this.numeroTotalDeImagens - 1 : this.posicaoDaImagem--;
  }
}
