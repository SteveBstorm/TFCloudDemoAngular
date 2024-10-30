import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoInputOutputComponent } from './components/demo-input-output/demo-input-output.component';
import { ChildInputComponent } from './components/demo-input-output/child-input/child-input.component';
import { ChildOutputComponent } from './components/demo-input-output/child-output/child-output.component';
import { ChildNgcontentComponent } from './components/demo-input-output/child-ngcontent/child-ngcontent.component';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    FahrenheitPipe,
    DemoDirectiveComponent,
    HighlightDirective,
    DemoInputOutputComponent,
    ChildInputComponent,
    ChildOutputComponent,
    ChildNgcontentComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
