import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercice1Component } from './exercice1/exercice1.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercice1', pathMatch: 'full' },
  { path: 'exercice1', component:Exercice1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
