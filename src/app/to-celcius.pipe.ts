import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius'
})
export class ToCelciusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return Math.round((value - 32) * 5/9) ;
  }

}
