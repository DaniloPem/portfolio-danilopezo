;
import { Observable } from 'rxjs';
import { Component, HostListener, OnInit } from '@angular/core';
import { IdiomasService } from '../services/idiomas/idiomas.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  idioma!: Observable<string>;
  classeNavegacaoComponente: string = 'sem-classe';

  constructor(private idiomasService: IdiomasService) { }

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
    window.addEventListener('scroll', () => {
      let posicaoYDoComponenteNavegacao: number = document.documentElement.scrollTop;
      let alturaDaJanela: number = window.innerHeight;
      let alturaDoComponenteNavegacao: number = alturaDaJanela * 0.15;
      if(posicaoYDoComponenteNavegacao <= (alturaDaJanela - alturaDoComponenteNavegacao)) {
        return this.classeNavegacaoComponente = 'navegacao-na-tela-home';
      } else if (posicaoYDoComponenteNavegacao <= (alturaDaJanela * 2 - alturaDoComponenteNavegacao)) {
        return this.classeNavegacaoComponente = 'navegacao-na-tela-about';
      } else {
        return this.classeNavegacaoComponente = 'navegacao-na-tela-projects';
      }
    });
  }

}
