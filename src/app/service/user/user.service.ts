import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/users';
   }

  get(page: number, limit: number, query: any, state: string) {
    
    let request = this.baseUrl + "?_page=" + page + "&_limit=" + limit + "&q=" + query;

    if (state === 'true' || state === 'false') request += "&isActive=" + state;

    return this.http.get<User[]>(request, {observe: "response"});
  }

  create(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  put(user: User) {
    return this.http.put(this.baseUrl + user.id, user);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + id);
  }
}
