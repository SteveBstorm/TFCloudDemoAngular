import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-chrono',
  templateUrl: './exo-chrono.component.html',
  styleUrl: './exo-chrono.component.scss'
})
export class ExoChronoComponent {

  public time : number;
  public interval : any | null;

  /* Exemple propriété : mauvaise pratique : Ne pas faire
  public get playDisabled():boolean{
    return this.interval;
  }
    */

  constructor(){
    this.time = 0;
    this.interval = null;
  }

  public startTimer() : void{
    this.interval = setInterval(
      () => this.time ++,
      1000
    );
  }

  public stopTimer() : void{
    clearInterval(this.interval);
    this.interval = null;
  }

  public resetTimer() : void{
    this.time = 0;
  }

}
