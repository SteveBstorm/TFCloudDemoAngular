import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
})
export class ConnectedComponent {

  isConnected: boolean = false;

  constructor(private _auth: AuthService) {
    this.isConnected = this._auth.isConnected;
  }


}
