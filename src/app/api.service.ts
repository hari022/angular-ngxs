import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  getData() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(response => {
      return response.map((x) => new Post(x.body, x.id, x.title, x.userId));

    }));
  }
}
