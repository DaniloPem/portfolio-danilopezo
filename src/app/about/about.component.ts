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
    // const textoAboutContainer = document.querySelector(
    //   '#texto-about-container'
    // );
    const textoAboutContainer = document.getElementById(
      'texto-about-container'
    );
    window.addEventListener('scroll', () => {
      let scroll: number = document.documentElement.scrollTop;
      let alturaDaJanela: number = window.innerHeight;

      if (scroll >= alturaDaJanela) {
        textoAboutContainer!.style.top = `${
          70 - (scroll - alturaDaJanela) * 0.03
        }%`;
      }

      if (scroll >= alturaDaJanela && scroll < alturaDaJanela * 3) {
        this.classeTituloAbout = 'titulo-about-fixed';
      } else if (scroll < alturaDaJanela) {
        this.classeTituloAbout = 'titulo-about-absolute';
      } else {
        this.classeTituloAbout = 'titulo-about-esconder';
      }
    });
  }
}
