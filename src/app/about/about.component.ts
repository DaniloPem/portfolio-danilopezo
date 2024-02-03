import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { COMPETENCIAS_WRAPPER } from '../shared/competencias.const';
import { Observable } from 'rxjs';
import { IdiomasService } from '../services/idiomas/idiomas.service';
import { DadosComponentesService } from '../services/dados-componentes/dados-componentes.service';
import { EXPERIENCIA_WRAPPER } from '../shared/experiencia.const';
import { FORMACAO_WRAPPER } from '../shared/formacao.const';
import { NOME_GRUPOS_COMPETENCIAS } from '../shared/nome-grupos-competencias.const';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  classeTituloAbout: string = 'sem-classe';
  fotosGaleria: number[] = [1, 2, 3, 4, 5, 6];
  nomesGruposCompetencias: any[] = NOME_GRUPOS_COMPETENCIAS;
  competenciasSkills: any[] = COMPETENCIAS_WRAPPER;
  competenciasExperiencia: any[] = EXPERIENCIA_WRAPPER;
  competenciasFormacao: any[] = FORMACAO_WRAPPER;
  @ViewChild('aboutModulo') aboutModulo!: ElementRef<HTMLDivElement>;
  @ViewChild('galeriaFotos') galeriaFotos!: ElementRef<HTMLDivElement>;
  @ViewChild('descricaoSection') descricaoSection!: ElementRef<HTMLElement>;
  @ViewChild('grupoCompetenciasContainer')
  grupoCompetenciasContainer!: ElementRef<HTMLElement>;
  @ViewChild('grupoSkills') grupoSkills!: ElementRef<HTMLDivElement>;
  @ViewChild('posicaoCompetenciasExperiencia')
  posicaoCompetenciasExperiencia!: ElementRef<HTMLElement>;
  alturaDescricaoSection!: any;
  alturaGaleriaFotos!: any;
  idioma!: Observable<string>;

  constructor(
    private idiomasService: IdiomasService,
    private dadosComponentesService: DadosComponentesService
  ) {}

  ngOnInit(): void {
    this.classeTituloAbout = 'titulo-about-absolute';
    this.idioma = this.idiomasService.getIdioma();
    this.handleScrollTituloComponenteAbout();
    this.handleScrollDescricaoComponenteAbout();
  }

  @HostListener('document:scroll')
  onScroll() {
    this.handleScrollTituloComponenteAbout();
    this.handleScrollGaleriaFotos();
    this.handleScrollComponenteCompetencias();
    this.handleScrollDescricaoComponenteAbout();
  }

  @HostListener('document:touchmove')
  touchMove() {
    this.handleScrollTituloComponenteAbout();
    this.handleScrollGaleriaFotos();
    this.handleScrollComponenteCompetencias();
    this.handleScrollDescricaoComponenteAbout();
  }

  handleScrollTituloComponenteAbout() {
    let alturaDaJanela: number = window.innerHeight;
    let scroll: number = document.documentElement.scrollTop;

    this.classePosicaoTituloSegundoScroll(scroll, alturaDaJanela);
  }

  classePosicaoTituloSegundoScroll(scroll: number, alturaDaJanela: number) {
    if (scroll > alturaDaJanela && scroll < alturaDaJanela * 3) {
      this.classeTituloAbout = 'titulo-about-fixed';
    } else if (scroll <= alturaDaJanela) {
      this.classeTituloAbout = 'titulo-about-absolute';
    } else {
      this.classeTituloAbout = 'titulo-about-esconder';
    }
  }

  handleScrollDescricaoComponenteAbout() {
    const textoAboutContainer = document.getElementById(
      'texto-about-container'
    );
    const alturaDaJanela: number = window.innerHeight;
    let scroll: number = document.documentElement.scrollTop;

    this.posicaoDescricaoAboutSegundoScroll(
      scroll,
      alturaDaJanela,
      textoAboutContainer
    );
  }

  posicaoDescricaoAboutSegundoScroll(
    scroll: number,
    alturaDaJanela: number,
    textoAboutContainer: HTMLElement | null
  ) {
    if (scroll >= alturaDaJanela) {
      textoAboutContainer!.style.top = `${
        50 - (scroll - alturaDaJanela) * 0.04
      }%`;
    }
  }

  handleScrollGaleriaFotos() {
    let alturaDaJanela = window.innerHeight;
    this.alturaDescricaoSection =
      this.descricaoSection.nativeElement.clientHeight;
    this.alturaGaleriaFotos = this.galeriaFotos.nativeElement.clientHeight;
    const posicaoInicialGaleriaFotos =
      this.alturaDescricaoSection + this.alturaGaleriaFotos;
    let scroll = document.documentElement.scrollTop;
    this.posicaoDaGaleriaFotosSegundoScroll(
      scroll,
      posicaoInicialGaleriaFotos,
      alturaDaJanela,
      this.alturaDescricaoSection
    );
  }

  posicaoDaGaleriaFotosSegundoScroll(
    scroll: any,
    posicaoInicialGaleriaFotos: any,
    alturaDaJanela: number,
    alturaDescricaoSection: any
  ) {
    if (
      scroll >= posicaoInicialGaleriaFotos &&
      scroll <= alturaDaJanela + alturaDescricaoSection
    ) {
      this.galeriaFotos.nativeElement.style.bottom = `${
        19 *
        -1 *
        (1 -
          (scroll - posicaoInicialGaleriaFotos) /
            (alturaDaJanela +
              alturaDescricaoSection -
              posicaoInicialGaleriaFotos))
      }%`;
    }
  }

  handleScrollComponenteCompetencias() {
    let alturaDaJanela = window.innerHeight;
    this.alturaDescricaoSection =
      this.descricaoSection.nativeElement.clientHeight;
    let scroll: number = document.documentElement.scrollTop;
    this.posicaoDoComponenteCompetenciasSegundoScroll(
      scroll,
      alturaDaJanela,
      this.alturaDescricaoSection
    );
  }

  posicaoDoComponenteCompetenciasSegundoScroll(
    scroll: any,
    alturaDaJanela: number,
    alturaDescricaoSection: any
  ) {
    if (scroll >= alturaDaJanela * 1.5 + alturaDescricaoSection) {
      this.grupoCompetenciasContainer.nativeElement.style.transform =
        'translateX(-100vw)';
    } else {
      this.grupoCompetenciasContainer.nativeElement.style.transform =
        'translateX(0)';
    }
  }

  encontrarValorCompetenciaEmFuncaoDoIdioma(
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
