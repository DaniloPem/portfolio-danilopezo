import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent implements OnInit {
  idiomas = [
    { nome: 'ingles', valor: 'english' },
    { nome: 'portugues', valor: 'português' },
    { nome: 'espanhol', valor: 'español' },
  ];
  idiomaSelecionadoControl = new FormControl(this.idiomas[0]);

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.idiomaSelecionadoControl.valueChanges.subscribe(() => {
      let idiomaSelecionado = this.idiomaSelecionadoControl.value?.nome as string;
      this.idiomasService.setIdioma(idiomaSelecionado);
    });
  }
}
