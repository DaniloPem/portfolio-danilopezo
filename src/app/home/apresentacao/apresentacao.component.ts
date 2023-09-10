import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss'],
})
export class ApresentacaoComponent implements OnInit {
  idioma!: Observable<string>;
  @Output() irParaProjectsEvent = new EventEmitter<void>();
  showDanilo: boolean = true;

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
    setInterval(() => {
      this.showDanilo = !this.showDanilo;
    }, 2000);
  }

  irParaProjects() {
    this.irParaProjectsEvent.emit();
  }
}
