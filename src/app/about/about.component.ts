import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  classeTituloAbout: string = 'sem-classe';

  constructor() {}

  ngOnInit(): void {
    this.classeTituloAbout = 'titulo-about-absolute';
    window.addEventListener('scroll', () => {
      let posicaoYDoTituloAbout: number = document.documentElement.scrollTop;
      let alturaDaJanela: number = window.innerHeight;
      let alturaTituloAboutContainer: number = alturaDaJanela * 0.22;
      if (
        posicaoYDoTituloAbout >= alturaDaJanela &&
        posicaoYDoTituloAbout < alturaDaJanela * 3
      ) {
        return (this.classeTituloAbout = 'titulo-about-fixed');
      } else if (posicaoYDoTituloAbout < alturaDaJanela) {
        return (this.classeTituloAbout = 'titulo-about-absolute');
      } else {
        return (this.classeTituloAbout = 'titulo-about-esconder');
      }
    });
  }
}
