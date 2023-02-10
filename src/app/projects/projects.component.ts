import { Component, OnInit } from '@angular/core';

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
      url: '../../assets/Gifs/pokemon-game.gif',
      competencias: ['Javascript', 'HTML5', 'CSS3']
    },
    {
      nome: 'Pokedex',
      ano: '2022',
      url: '../../assets/Gifs/pokemon-game.gif',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS']
    },
    {
      nome: 'Portfólio',
      ano: '2023',
      url: '../../assets/Gifs/pokemon-game.gif',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS']
    },
    {
      nome: 'Em breve',
      ano: '2023',
      url: '../../assets/Gifs/pokemon-game.gif',
      competencias: ['Angular', 'Javascript', 'HTML5', 'CSS3', 'SASS']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
