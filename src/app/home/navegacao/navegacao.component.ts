import { IdiomasService } from './../../services/idiomas/idiomas.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  idioma!: Observable<string>;

  constructor(private idiomasService: IdiomasService) { }

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }

}
