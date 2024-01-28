import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrls: ['./convite.component.scss'],
})
export class ConviteComponent implements OnInit {
  idioma!: Observable<string>;

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idioma = this.idiomasService.getIdioma();
  }
}
