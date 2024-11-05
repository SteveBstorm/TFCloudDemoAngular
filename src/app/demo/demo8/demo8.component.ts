import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterUser, User } from './user.model';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrl: './demo8.component.scss'
})
export class Demo8Component {
  url : string = "https://localhost:7050/ap/"

  info : User[] = []

  constructor(private client : HttpClient){}

  loadData() {
    this.client.get<User[]>(this.url+"user").subscribe({
      next : (data : User[]) => { this.info = data },
      error : (message : any) => { console.log(message)}
    })
  }

  register() {
    let newUser : RegisterUser = {email : "Cédric@mail.com", password : "test1234", nickname : "l'autre"}

    this.client.post(this.url+ "user/register", newUser, {responseType : 'text'}).subscribe({
      next : (message) => {
        this.loadData()
        console.log(message)
      },
      error : (error) => alert(error.message)
    })
  }
}
