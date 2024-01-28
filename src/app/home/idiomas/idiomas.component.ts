import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent implements OnInit {
  idiomas = [
    { nome: 'ingles', valor: 'english' },
    { nome: 'portugues', valor: 'português' },
    { nome: 'espanhol', valor: 'español' },
  ];
  idiomaSelecionadoControl = new FormControl(this.idiomas[0]);

  colorSelect: string = 'select-preto';

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idiomaSelecionadoControl.valueChanges.subscribe(() => {
      let idiomaSelecionado = this.idiomaSelecionadoControl.value!.nome;
      this.idiomasService.setIdioma(idiomaSelecionado);
    });

    window.addEventListener('scroll', () => {
      let posicaoYDoComponenteNavegacao: number =
        document.documentElement.scrollTop;
      let alturaDaJanela: number = window.innerHeight;
      let alturaDoComponenteNavegacao: number = alturaDaJanela * 0.15;
      if (
        (posicaoYDoComponenteNavegacao >
          alturaDaJanela - alturaDoComponenteNavegacao &&
          posicaoYDoComponenteNavegacao <=
            alturaDaJanela * 4.5 - alturaDoComponenteNavegacao) ||
        posicaoYDoComponenteNavegacao >=
          alturaDaJanela * 5.75 - alturaDoComponenteNavegacao
      ) {
        this.colorSelect = 'select-branco';
      } else {
        this.colorSelect = 'select-preto';
      }
    });
  }
}
