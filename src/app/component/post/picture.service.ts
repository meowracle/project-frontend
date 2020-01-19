import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Picture} from './picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private API_URL = 'http://localhost:8080/api/pictures';

  constructor(private http: HttpClient) {
  }

  getPicturesList(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.API_URL);
  }

  getPicture(id: number): Observable<Picture> {
    return this.http.get<Picture>(this.API_URL + '/' + id);
  }

  createPicture(preview): Observable<any> {
    console.log(preview);
    return this.http.post(this.API_URL, {
      src: preview
    });
  }

  editPicture(picture: Picture): Observable<any> {
    return this.http.put(this.API_URL + '/' + picture.id, picture);
  }

  deletePicture(id: number): Observable<any> {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
