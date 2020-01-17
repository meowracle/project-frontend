import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../interfaces/post';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL + 'posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(API_URL + 'posts/' + id);
  }

  createPost(post: Post): Observable<any> {
    return this.http.post(API_URL + 'posts', post);
  }

  editPost(post: Post): Observable<any> {
    return this.http.put(API_URL + 'posts/' + post.id, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(API_URL + 'posts/' + id);
  }
}
