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


export class AppComponent implements OnInit {
  mode = 'Observable';
  results = '';
  errorMessage: string;
  title = 'Интересные хобби';
  public posts: any;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
  	this.http.get('https://aturuntaev-ruby-blog.herokuapp.com/api/posts.json')
    //this.http.get('http://localhost:3000/api/posts.json')
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }  
}