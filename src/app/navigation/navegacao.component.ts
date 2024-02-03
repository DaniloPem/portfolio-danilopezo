import { Observable } from 'rxjs';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
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
  colorSelect: string = 'select-preto';
  @Output() irParaHomeEvent = new EventEmitter<void>();
  @Output() irParaAboutEvent = new EventEmitter<void>();
  @Output() irParaProjectsEvent = new EventEmitter<void>();
  @Output() irParaContactEvent = new EventEmitter<void>();

  constructor(
    private idiomasService: IdiomasService,
    private estiloNavegacaoService: EstiloNavegacaoService
  ) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
    this.estiloNavegacao = this.estiloNavegacaoService.getEstilo();
  }

  @HostListener('document:scroll')
  onScroll() {
    this.handleScroll();
  }

  @HostListener('document:touchmove')
  touchMove() {
    this.handleScroll();
  }

  handleScroll() {
    let posicaoYDoComponenteNavegacao: number =
      document.documentElement.scrollTop;
    let alturaDaJanela: number = window.innerHeight;
    let alturaDoComponenteNavegacao: number = alturaDaJanela * 0.15;
    this.classeSegundoAPosicaoScroll(
      posicaoYDoComponenteNavegacao,
      alturaDaJanela,
      alturaDoComponenteNavegacao
    );
  }

  classeSegundoAPosicaoScroll(
    posicaoYDoComponenteNavegacao: number,
    alturaDaJanela: number,
    alturaDoComponenteNavegacao: number
  ) {
    if (
      posicaoYDoComponenteNavegacao <=
      alturaDaJanela - alturaDoComponenteNavegacao
    ) {
      this.colorSelect = 'select-preto';
      return (this.classeNavegacaoComponente = 'navegacao-na-tela-home');
    } else if (
      posicaoYDoComponenteNavegacao <=
      alturaDaJanela * 4.5 - alturaDoComponenteNavegacao
    ) {
      this.colorSelect = 'select-branco';
      return (this.classeNavegacaoComponente = 'navegacao-na-tela-about');
    } else if (
      posicaoYDoComponenteNavegacao <=
      alturaDaJanela * 5.75 - alturaDoComponenteNavegacao
    ) {
      this.colorSelect = 'select-preto';
      return (this.classeNavegacaoComponente = 'navegacao-na-tela-projects');
    } else {
      this.colorSelect = 'select-branco';
      return (this.classeNavegacaoComponente = 'navegacao-na-tela-contact');
    }
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

  irParaContact() {
    this.irParaContactEvent.emit();
  }
}
