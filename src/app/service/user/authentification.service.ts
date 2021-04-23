import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl: string = '';

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/users/';
  }
  
  login(email: string) {
    return this.http.get<User>(this.baseUrl + "?email=" + email);
  }
}
