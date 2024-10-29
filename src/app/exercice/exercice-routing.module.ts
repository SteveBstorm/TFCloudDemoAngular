import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercice1Component } from './exercice1/exercice1.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercice1', pathMatch: 'full' },
  { path: 'exercice1', component: Exercice1Component },
  { path: 'exoChrono', component: ExoChronoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
