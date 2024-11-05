import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _isConnected = false;

  get isConnected (): boolean { return JSON.parse(localStorage.getItem("isconnected") ?? "false") }

  isConnectedSubject : Subject<boolean> = new Subject<boolean>()

  constructor () { }

  emitIsConnected() {
    this.isConnectedSubject.next(this.isConnected)
  }

  login (username: string, password: string): boolean {
    if (username !== "admin" || password !== "Test1234=") return false;
    //this._isConnected = true;
    localStorage.setItem("isconnected", JSON.stringify(true))
    this.emitIsConnected()
    return true;
  }

  logout () {
    // this._isConnected = false;
    localStorage.clear()
    this.emitIsConnected()

  }

}
