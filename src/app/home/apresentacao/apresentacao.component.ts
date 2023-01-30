import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  idioma!: Observable<string>;

  constructor(private idiomasService: IdiomasService) { }

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }

}
