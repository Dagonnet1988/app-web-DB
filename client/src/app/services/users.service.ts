import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "../models/Users";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:2000'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>(`${this.API_URI}/consult`)
  }
  getUser(cc: string): Observable<User>{
    return this.http.get<User>(`${this.API_URI}/consult/${cc}`)
  }
  saveUser(user: User){
    return this.http.post(`${this.API_URI}/create`, user)
  }

  updateUser(cc: string|number, updateUser: User) {
    return this.http.put(`${this.API_URI}/edit/${cc}`, updateUser)
  }

  deleteUser(cc: string){
    return this.http.delete(`${this.API_URI}/consult/${cc}`)
  }
}
