import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';

@Component({
  selector: 'app-dados-detalles',
  templateUrl: './dados-detalles.component.html',
  styleUrls: ['./dados-detalles.component.scss'],
})
export class DadosDetallesComponent implements OnInit {
  idioma!: Observable<string>;

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }
}
