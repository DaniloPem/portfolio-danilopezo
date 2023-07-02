import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-danilo';

  irParaHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  irParaAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  irParaProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
