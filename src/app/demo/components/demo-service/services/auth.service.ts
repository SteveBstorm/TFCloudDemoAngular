import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isConnected = false;

  get isConnected (): boolean { return this._isConnected; }

  constructor () { }

  login (username: string, password: string): boolean {
    if (username !== "admin" || password !== "Test1234=") return false;
    this._isConnected = true;
    return true;
  }

  logout () {
    this._isConnected = false;
  }

}
