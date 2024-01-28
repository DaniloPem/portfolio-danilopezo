import { Observable } from 'rxjs';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { DescricaoProjetoComponent } from './descricao-projeto/descricao-projeto.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstiloNavegacaoService } from '../services/navegacao/estilo-navegacao.service';
import { POKEMON_GAME } from './lista-de-projetos/pokemon-game';
import { POKEDEX } from './lista-de-projetos/pokedex';
import { PORTFOLIO } from './lista-de-projetos/portfolio';
import { COMING_SOON } from './lista-de-projetos/coming-soon';
import { DadosComponentesService } from '../services/dados-componentes/dados-componentes.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projetos: any[] = [POKEMON_GAME, POKEDEX, PORTFOLIO, COMING_SOON];

  mostrarHover = true;
  idioma!: Observable<String>;
  estiloNavegacao!: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private idiomasServices: IdiomasService,
    private estiloNavegacaoService: EstiloNavegacaoService,
    private dadosComponentesService: DadosComponentesService
  ) {}

  ngOnInit(): void {
    this.idioma = this.idiomasServices.getIdioma();
    this.estiloNavegacao = this.estiloNavegacaoService.getEstilo();
    this.dadosComponentesService =
      this.dadosComponentesService.setListaDePorjetos(this.projetos);
  }

  ngAfterViewInit(): void {
    this.mostrarCardsLazyLoad();
  }

  verMais(projeto: any) {
    this.mostrarHover = false;
    this.estiloNavegacaoService.setEstilo(true);
    this.dialog
      .open(DescricaoProjetoComponent, {
        data: projeto,
        width: '80%',
        height: '70%',
      })
      .afterClosed()
      .subscribe(
        () => (
          (this.mostrarHover = true),
          this.estiloNavegacaoService.setEstilo(false)
        )
      );
  }

  mostrarCardsLazyLoad() {
    const projetosCards = document.querySelectorAll('.projeto-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.toggle(
              'cards-visibles',
              entry.isIntersecting
            );
        });
      },
      {
        threshold: 0.2,
      }
    );

    projetosCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
