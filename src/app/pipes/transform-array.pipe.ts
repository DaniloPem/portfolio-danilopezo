import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformArray',
})
export class TransformArrayPipe implements PipeTransform {
  transform(value: any[], index: number): any[] {
    return value.slice(0, index);
  }
}
