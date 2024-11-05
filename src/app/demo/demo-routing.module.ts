import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';
import { DemoInputOutputComponent } from './components/demo-input-output/demo-input-output.component';
import { ConnectedComponent } from './components/demo-service/connected/connected.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo7Component } from './demo7/demo7.component';
import { CibleComponent } from './demo7/cible/cible.component';
import { gandalfGuard } from './demo7/gandalf.guard';
import { productResolver } from './demo7/productresolver.resolver';
import { Demo8Component } from './demo8/demo8.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo2', pathMatch: 'full'},
  { path: 'demo1', component: Demo1Component},
  { path: 'demo2', component: Demo2Component},
  { path: 'demo-directive', component: DemoDirectiveComponent},
  { path: 'demo-input-output', component: DemoInputOutputComponent },
  { path: 'demo-service', component: DemoServiceComponent },
  { path: 'connected', component: ConnectedComponent },
  { path: 'demo-forms', component: DemoFormsComponent },
  { path: 'demo7', component: Demo7Component },
  { path: 'cible/:id', canActivate: [gandalfGuard] , resolve : {monproduit: productResolver}, component: CibleComponent },
  { path: 'demo8', component: Demo8Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
