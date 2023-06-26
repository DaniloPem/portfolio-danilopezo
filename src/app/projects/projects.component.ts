import { Observable } from 'rxjs';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { DescricaoProjetoComponent } from './descricao-projeto/descricao-projeto.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projetos: any[] = [
    {
      nome: 'Pokémon Game',
      ano: '2022',
      background: '../../assets/Background-projetos/pokemon-game.gif',
      competencias: ['Javascript', 'HTML5', 'CSS3'],
      imagens: [
        'pokemon-game-cadastro',
        'pokemon-game-encontrar-batalha',
        'pokemon-game-batalha',
        'pokemon-game-trocar-pokemon',
        'pokemon-game-captura',
        'pokemon-game-curar',
        'pokemon-game-remover-adicionar',
      ],
      descricaoImagemIngles: [
        'User registration and choosing starter pokemon',
        'Finding wild pokemon',
        'Pokemon battle',
        'Choosing pokemon',
        'Capturing pokemon',
        'Healing pokemons and catching more pokeballs',
        'Removing and adding pokemon in bag',
      ],
      descricaoImagemEspanhol: [
        'Registro del usuario y elección del pokemon inical',
        'Encontrando pokemon salvaje',
        'Batalla pokemon',
        'Eligiendo pokemon',
        'Capturando pokemon',
        'Curando pokemones y obteniendo más pokebolas',
        'Retirando y agregando pokemones en la bolsa',
      ],
      descricaoImagemPortugues: [
        'Cadastro do usuario e escolha do pokemon inicial',
        'Achando pokemon selvagem',
        'Batalha pokemon',
        'Escolhendo pokemon',
        'Capturando pokemon',
        'Curando pokemons e pegando mais pokeballs',
        'Tirando e adicionando pokemons na bolsa',
      ],
      introducaoProjetoIngles:
        'Game developed in HTML, CSS and JavaScript Vanilla using only the animation library GSAP and Howler for sound effects.',
      introducaoProjetoEspanhol:
        'Juego desarrollado en HTML, CSS y JavaScript Vanilla utilizando solo la biblioteca de animación GSAP y Howler para efectos de sonido.',
      introducaoProjetoPortugues:
        'Jogo desenvolvido em HTML, CSS e JavaScript Vanilla com uso apenas da biblioteca de animação GSAP e Howler para efeitos sonoros.',
      descricaoDoProjetoIngles:
        'In the game, you will walk through a map with your character, encountering wild pokémon, which you can battle and capture them. You will choose a starter pokémon that will be your first partner in the adventure. And if you need to heal your pokémons or get more pokeballs, nurse Joy will help you.',
      descricaoDoProjetoPortugues:
        'No jogo, você pode andar com seu personagem encontrando pokémons selvagens, onde conseguirá batalhar e capturar todos eles. Você escolherá um pokémon inicial que será seu primeiro parceiro na aventura. E se precisar curar seu pokémon ou conseguir mais pokeballs, a nurse Joy vai te ajudar.',
      descricaoDoProjetoEspanhol:
        'En el juego, recorrerás un escenario con tu personaje encontrando pokémons salvajes, donde podrás batallar y capturarlos a todos. Escogerás un pokémon inicial que será tu primer compañero en la aventura. Y si necesitas curar a tus pokemones u obtener más pokebolas, la enfermera Joy te ayudará.',
      classe: 'pokemon-game',
      verCodigo: 'https://github.com/DaniloPem/pokemon-game',
    },
    {
      nome: 'Pokédex',
      ano: '2022',
      background: '../../assets/Background-projetos/pokedex.gif',
      competencias: ['Angular', 'Typescript', 'HTML5', 'SASS'],
      imagens: [
        'pokedex-buscar-por-nome',
        'pokedex-buscar-por-tipo',
        'pokedex-descricao-pokemon',
      ],
      descricaoImagemIngles: [
        'Search by pokemon name',
        'Search by pokemon type',
        'Pokemon details',
      ],
      descricaoImagemEspanhol: [
        'Búsqueda por nombre del pokémon ',
        'Búsqueda por tipo del pokémon ',
        'Detalles del pokémon',
      ],
      descricaoImagemPortugues: [
        'Busca pelo nome do pokémon',
        'Busca pelo tipo do pokémon',
        'Detalhes do pokémon',
      ],
      introducaoProjetoIngles:
        'Project developed in Angular, Typescript, HTML and SASS consuming the PokéAPI public API.',
      introducaoProjetoEspanhol:
        'Proyecto desarrollado en Angular, Typescript, HTML y SASS cosumiendo a API pública PokéAPI.',
      introducaoProjetoPortugues:
        'Projeto desenvolvido em Angular, Typescript, HTML e SASS cosumindo a API pública PokéAPI.',
      descricaoDoProjetoIngles:
        'In the pokédex, you will be able to search for all the pokémons of all the generations filtering by name and type. By clicking on a pokemon, you will see all its information such as weaknesses, strengths, attacks and other data as well.',
      descricaoDoProjetoPortugues:
        'No pokédex, você poderá pesquisar todos os pokémons de todas as gerações filtrando por nome e tipo. Ao clicar em um pokémon, você verá todas as informações dele, como pontos fracos, pontos fortes, ataques e outros dados também.',
      descricaoDoProjetoEspanhol:
        'En la pokédex, podrás buscar todos los pokémons de todas las generaciones filtrando por nombre y tipo. Al clicar en un pokémon, verás toda su información como debilidades, fortalezas, ataques y otros datos también.',
      classe: 'pokedex',
      verCodigo: 'https://github.com/DaniloPem/pokedex',
    },
    {
      nomeIngles: 'Portfolio',
      nomeEspanhol: 'Portafolio',
      nomePortugues: 'Portfólio',
      ano: '2023',
      background: '../../assets/Background-projetos/portfolio.png',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS'],
      imagens: [
        'pokedex-buscar-por-nome',
        'pokedex-buscar-por-tipo',
        'pokedex-descricao-pokemon',
      ],
      descricaoImagemIngles: [
        'User registration and choosing starter pokemon',
        'Finding wild pokemon',
        'Pokemon battle',
      ],
      descricaoImagemEspanhol: [
        'Registro del usuario y elección del pokemon inical',
        'Encontrando pokemon salvaje',
        'Batalla pokemon',
      ],
      descricaoImagemPortugues: [
        'Cadastro do usuario e escolha do pokemon inicial',
        'Achando pokemon selvagem',
        'Batalha pokemon',
      ],
      introducaoProjetoIngles: '',
      introducaoProjetoEspanhol: '',
      introducaoProjetoPortugues: '',
      descricaoDoProjetoIngles: '',
      descricaoDoProjetoPortugues: '',
      descricaoDoProjetoEspanhol: '',
      classe: 'portfolio',
    },
    {
      nomeIngles: 'Coming soon',
      nomeEspanhol: 'En breve',
      nomePortugues: 'Em breve',
      ano: '2023',
      background: '../../assets/Background-projetos/pokemon-game.gif',
      competencias: ['Under development'],
      classe: 'em-breve',
    },
  ];

  mostrarHover = true;
  idioma!: Observable<String>;

  constructor(
    private dialog: MatDialog,
    private idiomasServices: IdiomasService
  ) {}

  ngOnInit(): void {
    this.idioma = this.idiomasServices.getIdioma();
  }

  ngAfterViewInit(): void {
    this.mostrarCardsLazyLoad();
  }

  verMais(projeto: any) {
    this.mostrarHover = false;
    this.dialog
      .open(DescricaoProjetoComponent, {
        data: projeto,
        width: '80%',
        height: '70%',
      })
      .afterClosed()
      .subscribe(() => (this.mostrarHover = true));
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
