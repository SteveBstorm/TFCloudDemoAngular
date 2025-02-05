import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoShoppingListComponent } from './components/exo-shopping-list/exo-shopping-list.component';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exercice1Component } from './exercice1/exercice1.component';
import { NumberToChronoPipe } from './pipes/number-to-chrono.pipe';
import { ListViewComponent } from './components/exo-shopping-list/list-view/list-view.component';
import { ExoShoppingServiceComponent } from './components/exo-shopping-service/exo-shopping-service.component';
import { ExoFormsComponent } from './components/exo-forms/exo-forms.component';


@NgModule({
  declarations: [
    Exercice1Component,
    ExoChronoComponent,
    NumberToChronoPipe,
    ExoShoppingListComponent,
    ListViewComponent,
    ExoShoppingServiceComponent,
    ExoFormsComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
  ]
})
export class ExerciceModule { }
