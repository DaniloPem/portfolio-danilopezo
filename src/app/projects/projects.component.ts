import { DescricaoProjetoComponent } from './descricao-projeto/descricao-projeto.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projetos: any[] = [
    {
      nome: 'Pokemon Game',
      ano: '2022',
      background: '../../assets/Background-projetos/pokemon-game.gif',
      competencias: ['Javascript', 'HTML5', 'CSS3'],
      imagens: ['pokemon-game-batalha', 'pokemon-game-cadastro', 'pokemon-game-captura',
      'pokemon-game-curar', 'pokemon-game-encontrar-batalha', 'pokemon-game-remover-adicionar',
      'pokemon-game-trocar-pokemon'],
      classe: 'pokemon-game',
      verCodigo: 'https://github.com/DaniloPem/pokemon-game'
    },
    {
      nome: 'Pokedex',
      ano: '2022',
      background: '../../assets/Background-projetos/pokedex.gif',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS'],
      classe: 'pokedex'
    },
    {
      nome: 'Portfólio',
      ano: '2023',
      background: '../../assets/Background-projetos/portfolio.png',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS'],
      classe: 'portfolio'
    },
    {
      nome: 'Em breve',
      ano: '2023',
      background: '../../assets/Background-projetos/pokemon-game.gif',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS'],
      classe: 'em-breve'
    },
  ];

  mostrarHover = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mostrarCardsLazyLoad()
  }

  verMais(projeto: any) {
    this.mostrarHover = false;
    this.dialog.open(DescricaoProjetoComponent, {
      data: projeto.imagens,
      width: '80%',
      height: '70%',
    }).afterClosed().subscribe(() => this.mostrarHover = true);
  }

  mostrarCardsLazyLoad() {
    const projetosCards = document.querySelectorAll('.projeto-card')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('cards-visibles', entry.isIntersecting)
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 1,
    }
    )

    projetosCards.forEach(card => {
      observer.observe(card)
    }, )
  }
}
