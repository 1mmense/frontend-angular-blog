import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
     id: number;
     name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})


export class AppComponent{
  mode = 'Observable';
  errorMessage: string;
  title = 'Listing posts';
  public posts: any;
  constructor(private http: HttpClient) {
    this.http.get('https://aturuntaev-ruby-blog.herokuapp.com/posts.json')
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }  
}