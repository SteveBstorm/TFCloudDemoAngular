import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dir-Highlight]'
})
export class HighlightDirective {
  
  constructor(private _element : ElementRef) { }
  
  @HostListener('mouseenter') 
  public onMouseEnter():void{
    this._element.nativeElement.style.backgroundColor = "yellow";
    console.log("enter");    
  }

  @HostListener('mouseout')
  public onMouseOut():void{
    this._element.nativeElement.style.backgroundColor = "transparent";
    console.log("out");
  }
}
