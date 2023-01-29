import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiras3Letras'
})
export class Primeiras3LetrasPipe implements PipeTransform {

  transform(value: string | null | undefined, ...args: any[]): string {
    return value?.slice(0, 3) ?? '';
  }

}
