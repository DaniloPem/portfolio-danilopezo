import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  private idioma!: string;

  constructor() { }

  getIdioma() :string {
    return this.idioma;
  }

  setIdioma(valor: string) {
    this.idioma = valor;
  }
}
