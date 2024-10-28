import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /* redirection page par défaut */
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  /* Va rechercher les routes dans demo/demo-routing */
  { 
    path: 'demo', 
    loadChildren: () => 
      import('./demo/demo.module').then(m => m.DemoModule)
  },
  { 
    path: 'exercice', 
    loadChildren: () => 
      import('./exercice/exercice.module').then(m => m.ExerciceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
