import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { COMPETENCIAS_WRAPPER } from '../shared/competencias.const';
import { Observable } from 'rxjs';
import { IdiomasService } from '../services/idiomas/idiomas.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  classeTituloAbout: string = 'sem-classe';
  fotosGaleria: number[] = [1, 2, 3, 4, 5, 6];
  @ViewChild('galeriaFotos') galeriaFotos!: ElementRef<HTMLDivElement>;
  @ViewChild('descricaoSection') descricaoSection!: ElementRef<HTMLElement>;
  @ViewChild('competenciasContainer')
  competenciasContainer!: ElementRef<HTMLDivElement>;
  competenciasWrapper: any[] = COMPETENCIAS_WRAPPER;
  idioma!: Observable<string>;
  grupoCompetenciaAberta!: any;

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
    this.classeTituloAbout = 'titulo-about-absolute';
    const textoAboutContainer = document.getElementById(
      'texto-about-container'
    );
    const alturaDaJanela: number = window.innerHeight;
    window.addEventListener('scroll', () => {
      let scroll: number = document.documentElement.scrollTop;

      if (scroll >= alturaDaJanela) {
        textoAboutContainer!.style.top = `${
          70 - (scroll - alturaDaJanela) * 0.04
        }%`;
      }

      if (scroll > alturaDaJanela && scroll < alturaDaJanela * 3) {
        this.classeTituloAbout = 'titulo-about-fixed';
      } else if (scroll <= alturaDaJanela) {
        this.classeTituloAbout = 'titulo-about-absolute';
      } else {
        this.classeTituloAbout = 'titulo-about-esconder';
      }
    });
  }

  ngAfterViewInit(): void {
    const alturaDaJanela = window.innerHeight;
    const alturaDescricaoSection =
      this.descricaoSection.nativeElement.clientHeight;
    const alturaGaleriaFotos = this.galeriaFotos.nativeElement.clientHeight;
    const posicaoInicialGaleriaFotos =
      alturaDescricaoSection + alturaGaleriaFotos;

    window.addEventListener('scroll', () => {
      let scroll: number = document.documentElement.scrollTop;

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
    });
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

  abrirGrupoCompetencia(grupoCompetencia: any) {
    this.grupoCompetenciaAberta =
      this.grupoCompetenciaAberta === grupoCompetencia
        ? null
        : grupoCompetencia;
  }
}
