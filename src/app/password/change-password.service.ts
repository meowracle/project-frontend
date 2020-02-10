import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }
}
