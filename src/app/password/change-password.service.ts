import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  apiURL = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient) {}
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiURL + id);
  }
  editPassword(user: User): Observable<any> {
    return this.http.put(this.apiURL + user.id, user);
  }
}
