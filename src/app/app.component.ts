import { Component } from '@angular/core';
import { Link } from './shared/models/link';
import { ILink } from './shared/models/ilink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  navigationList : Link[]

  constructor(){
    this.navigationList = [
      new Link("Home", "home"),
      new Link("Démos", "demo", [
        new Link("Démo 1", "demo1"),
        new Link("Démo 2", "demo2"),
        new Link("Démo 3 : Les directives", "demo-directive"),
        new Link("Démo 4 : Input/Output", "demo-input-output"),
        new Link("Démo 5 : Services et DI", "demo-service"),
        new Link("Connecté", "connected"),
        new Link("Démo 6 : Formulaires", "demo-forms"),
        new Link("Démo 7 : Routing", "demo7"),
        new Link("Démo 8 : Conso API", "demo8"),

      ], false),
      new Link("Exercices", "exercice", [
        new Link("Exercice 1", "exercice1"),
        new Link("Exercice : Le chronomètre", "exoChrono"),
        new Link("Exercice: Shopping List", "exo-shopping"),
        new Link("Exercice: Shopping Service", "exo-shopping-service"),
        new Link("Exercice: Formulaires", "exo-forms"),
      ], false)
    ];
  }
}
