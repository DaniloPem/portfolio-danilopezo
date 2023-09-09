import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DadosComponentesService } from 'src/app/services/dados-componentes/dados-componentes.service';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { COMPETENCIAS_WRAPPER } from 'src/app/shared/competencias.const';

@Component({
  selector: 'app-grupo-competencias',
  templateUrl: './grupo-competencias.component.html',
  styleUrls: ['./grupo-competencias.component.scss'],
})
export class GrupoCompetenciasComponent implements OnInit {
  @ViewChild('competenciasContainer')
  competenciasContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('sublinhadoSkills') sublinnhadoSills!: ElementRef<HTMLDivElement>;
  grupoCompetenciaAberta!: any;
  idioma!: Observable<string>;
  @Input() alturaDescricaoSection!: number;
  @Input() alturaGaleriaFotos!: number;
  @Input() nomeGrupoCompetencia!: any;
  @Input() listaCompetencias!: any[];

  constructor(
    private idiomasService: IdiomasService,
    private dadosComponentesService: DadosComponentesService
  ) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }

  ngAfterViewInit(): void {
    const alturaDaJanela = window.innerHeight;

    window.addEventListener('scroll', () => {
      let scroll: number = document.documentElement.scrollTop;
      const posicaoInicialGaleriaFotos =
        this.alturaDescricaoSection + this.alturaGaleriaFotos;
      if (
        scroll >= posicaoInicialGaleriaFotos &&
        scroll <= alturaDaJanela + this.alturaDescricaoSection
      ) {
        this.sublinnhadoSills.nativeElement.style.width = `${
          ((scroll - posicaoInicialGaleriaFotos) * 100) /
          (alturaDaJanela +
            this.alturaDescricaoSection -
            posicaoInicialGaleriaFotos)
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
