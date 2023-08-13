import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { IdiomasService } from '../services/idiomas/idiomas.service';
import { EstiloNavegacaoService } from '../services/navegacao/estilo-navegacao.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss'],
})
export class NavegacaoComponent implements OnInit {
  idioma!: Observable<string>;
  classeNavegacaoComponente: string = 'sem-classe';
  estiloNavegacao!: Observable<boolean>;
  @Output() irParaHomeEvent = new EventEmitter<void>();
  @Output() irParaAboutEvent = new EventEmitter<void>();
  @Output() irParaProjectsEvent = new EventEmitter<void>();

  constructor(
    private idiomasService: IdiomasService,
    private estiloNavegacaoService: EstiloNavegacaoService
  ) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
    this.estiloNavegacao = this.estiloNavegacaoService.getEstilo();
    window.addEventListener('scroll', () => {
      let posicaoYDoComponenteNavegacao: number =
        document.documentElement.scrollTop;
      let alturaDaJanela: number = window.innerHeight;
      let alturaDoComponenteNavegacao: number = alturaDaJanela * 0.15;
      if (
        posicaoYDoComponenteNavegacao <=
        alturaDaJanela - alturaDoComponenteNavegacao
      ) {
        return (this.classeNavegacaoComponente = 'navegacao-na-tela-home');
      } else if (
        posicaoYDoComponenteNavegacao <=
        alturaDaJanela * 3.75 - alturaDoComponenteNavegacao
      ) {
        return (this.classeNavegacaoComponente = 'navegacao-na-tela-about');
      } else {
        return (this.classeNavegacaoComponente = 'navegacao-na-tela-projects');
      }
    });
  }

  irParaHome() {
    this.irParaHomeEvent.emit();
  }

  irParaAbout() {
    this.irParaAboutEvent.emit();
  }

  irParaProjects() {
    this.irParaProjectsEvent.emit();
  }
}
