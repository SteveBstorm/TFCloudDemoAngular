import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exercice1Component } from './exercice1/exercice1.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { NumberToChronoPipe } from './pipes/number-to-chrono.pipe';


@NgModule({
  declarations: [
    Exercice1Component,
    ExoChronoComponent,
    NumberToChronoPipe
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
