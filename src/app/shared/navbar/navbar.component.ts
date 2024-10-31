import { Component } from '@angular/core';
import { AuthService } from '../../demo/components/demo-service/services/auth.service';
import { Link } from '../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public navigationList: Link[];
  isConnected: boolean = false;

  constructor ( private _auth: AuthService ) {
    this.navigationList = [
      new Link("Home", "home"),
      new Link("Démos", "demo", [
        new Link("Démo 1", "demo1"),
        new Link("Démo 2", "demo2"),
        new Link("Démo : Les directives", "demo-directive"),
        new Link("Démo : Input/Output", "demo-input-output"),
        new Link("Démo : Services et DI", "demo-service"),
        new Link("Connecté", "connected"),
        new Link("Démo : Formulaires", "demo-forms"),
      ], false),
      new Link("Exercices", "exercice", [
        new Link("Exercice 1", "exercice1"),
        new Link("Exercice : Le chronomètre", "exoChrono"),
        new Link("Exercice: Shopping List", "exo-shopping"),
        new Link("Exercice: Shopping Service", "exo-shopping-service"),
        new Link("Exercice: Formulaires", "exo-forms"),
      ], false)
    ];

    this.isConnected = this._auth.isConnected;
  }

}
