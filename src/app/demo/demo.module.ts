import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    FahrenheitPipe,
    DemoDirectiveComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
