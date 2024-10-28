import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class FahrenheitPipe implements PipeTransform {

  //args => arguments supplémentaires
  transform(value: number, ...args: unknown[]): string {
    // (0 °C × 9/5) + 32 = 32 °F

    return ((value * 1.8) + 32) + " °F";
  }

}
