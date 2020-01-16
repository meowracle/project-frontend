import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../interfaces/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiURL = 'http://localhost:8080/api/comments/';

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiURL);
  }
  createComment(comment: Comment): Observable<any> {
    return this.http.post(this.apiURL, comment);
  }

}
