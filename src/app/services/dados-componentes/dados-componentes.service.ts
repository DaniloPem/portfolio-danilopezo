import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosComponentesService {
  alturaDescricaoSection!: number;
  alturaGaleriaFotos!: number;
  listaDeProjetos!: any[];

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

  getListaDeProjetos(): any[] {
    return this.listaDeProjetos;
  }

  setListaDePorjetos(valor: any[]): any {
    this.listaDeProjetos = valor;
  }
}
