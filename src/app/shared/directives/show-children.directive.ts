import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dir-showChildren]'
})
export class ShowChildrenDirective {

  constructor(private _element : ElementRef) { }

  @HostListener('click')
  public onClick():void{
    this._element.nativeElement.nextElementSibling.classList.toggle("visible");
  }
}
