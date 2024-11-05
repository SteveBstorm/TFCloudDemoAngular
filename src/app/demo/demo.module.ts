import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { ChildInputComponent } from './components/demo-input-output/child-input/child-input.component';
import { ChildNgcontentComponent } from './components/demo-input-output/child-ngcontent/child-ngcontent.component';
import { ChildOutputComponent } from './components/demo-input-output/child-output/child-output.component';
import { DemoInputOutputComponent } from './components/demo-input-output/demo-input-output.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { DemoRoutingModule } from './demo-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { ConnectedComponent } from './components/demo-service/connected/connected.component';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';
import { Demo7Component } from './demo7/demo7.component';
import { CibleComponent } from './demo7/cible/cible.component';
import { ErrorComponent } from './demo7/error/error.component';
import { Demo8Component } from './demo8/demo8.component';



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
    ChildNgcontentComponent,
    DemoServiceComponent,
    ConnectedComponent,
    DemoFormsComponent,
    Demo7Component,
    CibleComponent,
    ErrorComponent,
    Demo8Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
  ]
})
export class DemoModule { }
