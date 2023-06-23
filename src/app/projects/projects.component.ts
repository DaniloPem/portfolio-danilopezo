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
      imagens: ['pokemon-game-cadastro', 'pokemon-game-encontrar-batalha', 'pokemon-game-batalha', 'pokemon-game-trocar-pokemon',
      'pokemon-game-captura', 'pokemon-game-curar', 'pokemon-game-remover-adicionar'],
      descricaoImagemIngles: ['User registration and choosing starter pokemon', 'Finding wild pokemon', 'Pokemon battle', 'Choosing pokemon',
    'Capturing pokemon', 'Healing pokemons and catching more pokeballs', 'Removing and adding pokemon in bag'],
      descricaoImagemEspanhol:['Registro del usuario y elección del pokemon inical', 'Encontrando pokemon salvaje', 'Batalla pokemon', 'Eligiendo pokemon',
    'Capturando pokemon', 'Curando pokemones y obteniendo más pokebolas', 'Retirando y agregando pokemones en la bolsa'],
      descricaoImagemPortugues: ['Cadastro do usuario e escolha do pokemon inicial', 'Achando pokemon selvagem', 'Batalha pokemon', 'Escolhendo pokemon',
    'Capturando pokemon', 'Curando pokemons e pegando mais pokeballs', 'Tirando e adicionando pokemons na bolsa'],
      introducaoProjetoIngles: 'Game developed in HTML, CSS and JavaScript Vanilla using only the animation library GSAP and Howler for sound effects.',
      introducaoProjetoEspanhol: 'Juego desarrollado en HTML, CSS y JavaScript Vanilla utilizando solo la biblioteca de animación GSAP y Howler para efectos de sonido.',
      introducaoProjetoPortugues: 'Jogo desenvolvido em HTML, CSS e JavaScript vanilla com uso apenas da biblioteca de animação GSAP e Howler para efeitos sonoros.',
      classe: 'pokemon-game',
      verCodigo: 'https://github.com/DaniloPem/pokemon-game'
    },
    {
      nome: 'Pokedex',
      ano: '2022',
      background: '../../assets/Background-projetos/pokedex.gif',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS'],
      imagens:  ['pokedex-buscar-por-nome', 'pokedex-buscar-por-tipo', 'pokedex-descricao-pokemon'],
      descricaoImagemIngles: ['User registration and choosing starter pokemon', 'Finding wild pokemon', 'Pokemon battle'],
      descricaoImagemEspanhol:['Registro del usuario y elección del pokemon inical', 'Encontrando pokemon salvaje', 'Batalla pokemon'],
      descricaoImagemPortugues: ['Cadastro do usuario e escolha do pokemon inicial', 'Achando pokemon selvagem', 'Batalha pokemon'],
      introducaoProjetoIngles: 'Game developed in HTML, CSS and JavaScript Vanilla using only the animation library GSAP and Howler for sound effects.',
      introducaoProjetoEspanhol: 'Juego desarrollado en HTML, CSS y JavaScript Vanilla utilizando solo la biblioteca de animación GSAP y Howler para efectos de sonido.',
      introducaoProjetoPortugues: 'Jogo desenvolvido em HTML, CSS e JavaScript vanilla com uso apenas da biblioteca de animação GSAP e Howler para efeitos sonoros.',
      classe: 'pokedex',
      verCodigo: 'https://github.com/DaniloPem/pokedex'
    },
    {
      nome: 'Portfólio',
      ano: '2023',
      background: '../../assets/Background-projetos/portfolio.png',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS'],
      imagens:  ['pokedex-buscar-por-nome', 'pokedex-buscar-por-tipo', 'pokedex-descricao-pokemon'],
      descricaoImagemIngles: ['User registration and choosing starter pokemon', 'Finding wild pokemon', 'Pokemon battle'],
      descricaoImagemEspanhol:['Registro del usuario y elección del pokemon inical', 'Encontrando pokemon salvaje', 'Batalla pokemon'],
      descricaoImagemPortugues: ['Cadastro do usuario e escolha do pokemon inicial', 'Achando pokemon selvagem', 'Batalha pokemon'],
      introducaoProjetoIngles: 'Game developed in HTML, CSS and JavaScript Vanilla using only the animation library GSAP and Howler for sound effects.',
      introducaoProjetoEspanhol: 'Juego desarrollado en HTML, CSS y JavaScript Vanilla utilizando solo la biblioteca de animación GSAP y Howler para efectos de sonido.',
      introducaoProjetoPortugues: 'Jogo desenvolvido em HTML, CSS e JavaScript vanilla com uso apenas da biblioteca de animação GSAP e Howler para efeitos sonoros.',
      classe: 'portfolio'
    },
    {
      nome: 'Em breve',
      ano: '2023',
      background: '../../assets/Background-projetos/pokemon-game.gif',
      competencias: ['Under development'],
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
      data: projeto,
      width: '80%',
      height: '70%',
    }).afterClosed().subscribe(() => this.mostrarHover = true);
  }

  mostrarCardsLazyLoad() {
    const projetosCards = document.querySelectorAll('.projeto-card')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.toggle('cards-visibles', entry.isIntersecting)
      })
    },
    {
      threshold: 0.2,
    }
    )

    projetosCards.forEach(card => {
      observer.observe(card)
    }, )
  }
}
