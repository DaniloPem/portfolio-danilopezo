import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semPorcentagem'
})
export class SemPorcentagemPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.replace('%', '') ?? value;
  }

}
