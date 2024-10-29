import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToChrono'
})
export class NumberToChronoPipe implements PipeTransform {

  transform(seconds: number, haveHours : boolean = true): string {
    let minutes : number = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if(haveHours){
      let hours : number = Math.floor(minutes /60 );
      minutes = minutes % 60;
      return `${hours} heures ${minutes} minutes ${seconds} secondes`;
    }
    return `${minutes} minutes ${seconds} secondes`;
  }

}
