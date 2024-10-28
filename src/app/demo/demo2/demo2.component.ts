import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  message: string = "Elle est où la poulette ?";

  money: number = 3.1415;

  today: Date = new Date();
}
