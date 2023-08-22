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
import { DadosComponentesService } from '../services/dados-componentes/dados-componentes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  classeTituloAbout: string = 'sem-classe';
  fotosGaleria: number[] = [1, 2, 3, 4, 5, 6];
  nomesGruposCompetencias: string[] = ['skills'];
  competenciasSkills: any[] = COMPETENCIAS_WRAPPER;
  @ViewChild('galeriaFotos') galeriaFotos!: ElementRef<HTMLDivElement>;
  @ViewChild('descricaoSection') descricaoSection!: ElementRef<HTMLElement>;
  alturaDescricaoSection!: any;
  alturaGaleriaFotos!: any;
  idioma!: Observable<string>;

  constructor(
    private idiomasService: IdiomasService,
    private dadosComponentesService: DadosComponentesService
  ) {}

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
    this.alturaDescricaoSection =
      this.descricaoSection.nativeElement.clientHeight;
    this.alturaGaleriaFotos = this.galeriaFotos.nativeElement.clientHeight;
    const posicaoInicialGaleriaFotos =
      this.alturaDescricaoSection + this.alturaGaleriaFotos;

    window.addEventListener('scroll', () => {
      let scroll: number = document.documentElement.scrollTop;

      if (
        scroll >= posicaoInicialGaleriaFotos &&
        scroll <= alturaDaJanela + this.alturaDescricaoSection
      ) {
        this.galeriaFotos.nativeElement.style.bottom = `${
          19 *
          -1 *
          (1 -
            (scroll - posicaoInicialGaleriaFotos) /
              (alturaDaJanela +
                this.alturaDescricaoSection -
                posicaoInicialGaleriaFotos))
        }%`;
      }
    });
  }
}
