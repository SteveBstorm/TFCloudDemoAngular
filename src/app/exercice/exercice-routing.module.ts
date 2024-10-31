import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoShoppingListComponent } from './components/exo-shopping-list/exo-shopping-list.component';
import { ExoShoppingServiceComponent } from './components/exo-shopping-service/exo-shopping-service.component';
import { Exercice1Component } from './exercice1/exercice1.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercice1', pathMatch: 'full' },
  { path: 'exercice1', component: Exercice1Component },
  { path: 'exoChrono', component: ExoChronoComponent },
  { path: 'exo-shopping', component: ExoShoppingListComponent },
  { path: 'exo-shopping-service', component: ExoShoppingServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
