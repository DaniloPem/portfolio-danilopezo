import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  private idioma: Subject<string> = new BehaviorSubject('ingles');

  constructor() { }

  getIdioma(): Observable<string> {
    return this.idioma.asObservable();
  }

  setIdioma(valor: string): void {
    this.idioma.next(valor);
  }
}
