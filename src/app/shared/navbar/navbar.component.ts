import { Component, Input } from '@angular/core';
import { AuthService } from '../../demo/components/demo-service/services/auth.service';
import { Link } from '../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() navigationList?: Link[];
  isConnected: boolean = false;

  constructor ( private _auth: AuthService ) {
    _auth.isConnectedSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })

    _auth.emitIsConnected()

    // sans observable
    // this.isConnected = this._auth.isConnected;
  }

}
