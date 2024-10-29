import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrl: './demo-directive.component.scss'
})
export class DemoDirectiveComponent {

  public stock : number;
  public warningStockStyle : object;
  public allrightStockStyle : object;

  public numberList : number[];

  constructor(){
    this.stock = 0;
    this.warningStockStyle = {"color" : "Red", "font-weight" : "bold"};
    this.allrightStockStyle = {"color" : "Green", "text-decoration" : "underline"};
    this.numberList = [];
  }

  public addStock() : void{
    this.stock++;
  }
  
  public subStock() : void{
    if(this.stock>0) this.stock--;
  }

  public saveStockInList() : void{
    this.numberList.push(this.stock);
    this.stock = 0;
  }
}
