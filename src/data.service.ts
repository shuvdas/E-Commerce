import { Injectable } from '@angular/core';
import { Post } from './post';
import { Card } from './card';
import { User } from './User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

searchOptions = [];

public postsData: Post[];

tableUrl: string = "http://localhost:8080/shopapp/shoplist";
cardUrl: string = "http://localhost:8080/shopapp/cardlist";
userUrl: string = "http://localhost:8080/shopapp/createuser"

constructor(private http: HttpClient) { }

public getPosts(): Observable<Post[]> { 
  return this.http.get<Post[]>(this.tableUrl);
}

public getCards(): Observable<Card[]> {
  return this.http.get<Card[]>(this.cardUrl);
}

public createUser(user: User): Observable<User> {
  return this.http.post<User>(this.userUrl, user);
}

filteredListOptions() {
  let posts = this.postsData;
      let filteredPostsList = [];
      for (let post of posts) {
          for (let options of this.searchOptions) {
              if (options.title === post.title) {
                filteredPostsList.push(post);
              }
          }
      }
      return filteredPostsList;
}

}
