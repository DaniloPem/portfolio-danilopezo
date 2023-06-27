import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstiloNavegacaoService {
  private estiloNavegacao: Subject<boolean> = new BehaviorSubject(false);

  constructor() {}

  getEstilo(): Observable<boolean> {
    return this.estiloNavegacao.asObservable();
  }

  setEstilo(valor: boolean): void {
    this.estiloNavegacao.next(valor);
  }
}
