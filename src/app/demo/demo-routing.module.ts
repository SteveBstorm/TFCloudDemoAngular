import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';
import { DemoInputOutputComponent } from './components/demo-input-output/demo-input-output.component';
import { ConnectedComponent } from './components/demo-service/connected/connected.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo2', pathMatch: 'full'},
  { path: 'demo1', component: Demo1Component},
  { path: 'demo2', component: Demo2Component},
  { path: 'demo-directive', component: DemoDirectiveComponent},
  { path: 'demo-input-output', component: DemoInputOutputComponent },
  { path: 'demo-service', component: DemoServiceComponent },
  { path: 'connected', component: ConnectedComponent },
  { path: 'demo-forms', component: DemoFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
