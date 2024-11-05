import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './demo/demo7/error/error.component';

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
  },
  {path : '404', component : ErrorComponent},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
