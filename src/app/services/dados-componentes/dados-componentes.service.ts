import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosComponentesService {
  alturaDescricaoSection!: number;
  alturaGaleriaFotos!: number;

  constructor() {}

  getAlturaDescricaoSection(): number {
    return this.alturaDescricaoSection;
  }

  setAlturaDescricaoSection(valor: number): void {
    this.alturaDescricaoSection = valor;
  }

  getAlturaGaleriaFotos(): number {
    return this.alturaGaleriaFotos;
  }

  setAlturaGaleriaFotos(valor: number): void {
    this.alturaGaleriaFotos = valor;
  }
}
