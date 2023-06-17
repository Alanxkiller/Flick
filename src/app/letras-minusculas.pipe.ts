import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letrasMinusculas'
})
export class LetrasMinusculasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}`.toLowerCase();
  }

}
