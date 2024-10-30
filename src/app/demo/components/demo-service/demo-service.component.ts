import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrl: './demo-service.component.scss'
})
export class DemoServiceComponent {

  username: string = "";
  password: string = "";

  isConnected: boolean = false;

  // inject à parler
  private _auth2 = inject(AuthService);

  constructor (private _auth: AuthService) {
    this.isConnected = this._auth.isConnected;
  }

  login () {
    const success = this._auth.login(this.username, this.password);
    if (success) {
      console.log("Login successfull");
      this.isConnected = this._auth.isConnected;
    }
    else {
      console.log("Login failed");
    }
  }
  
  logout () {
    this._auth.logout();
    this.isConnected = this._auth.isConnected;
  }
  
}
