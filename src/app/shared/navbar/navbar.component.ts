import { Component } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public navigationList : Link[];

  constructor(){
    this.navigationList = [
      new Link("Home", "home"),
      new Link("Démos", "demo", [
        new Link("Démo 1", "demo1"),
        new Link("Démo 2", "demo2"),
        new Link("Démo : Les directives", "demo-directive")
      ], false),
      new Link("Exercices", "exercice", [
        new Link("Exercice 1", "exercice1"),
        new Link("Exercice : Le chronomètre", "exoChrono"),
      ], false)
    ];
  }

}
