import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  world: string = "World";

  message: string = "";

  isDisabled: boolean = true;

  salutationInEnglish(): void {
    this.message = "Hi guys!";
  }
  salutationInNederlands(): void {
    this.message = "Dag vrienden";
  }
  salutationInSwedish():void{
    this.message = "Hej vänner";
  }
}
