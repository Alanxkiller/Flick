import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letrasMayusculas'
})
export class LetrasMayusculasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //console.log(value);
    return `${value}`.toUpperCase();
  }

}
