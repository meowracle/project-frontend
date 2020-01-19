import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private API_URL = 'http://localhost:8080/api/pictures';

  constructor(private http: HttpClient) { }
  getPicturesList(): Observable<>
}
