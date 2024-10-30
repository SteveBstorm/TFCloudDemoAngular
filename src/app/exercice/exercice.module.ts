import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoShoppingListComponent } from './components/exo-shopping-list/exo-shopping-list.component';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exercice1Component } from './exercice1/exercice1.component';
import { NumberToChronoPipe } from './pipes/number-to-chrono.pipe';
import { ListViewComponent } from './components/exo-shopping-list/list-view/list-view.component';


@NgModule({
  declarations: [
    Exercice1Component,
    ExoChronoComponent,
    NumberToChronoPipe,
    ExoShoppingListComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
  ]
})
export class ExerciceModule { }
