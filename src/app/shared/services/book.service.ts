import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private model ="courses/";

  constructor(private http: HttpClient) { }

  private getUrl = () => `${BASE_URL}${this.model}`;

  private getUrlById = (id) => `${this.getUrl()}${id}`;
  
  all(){
    return this.http.get(this.getUrl());
  }

  find(courseId){
      return this.getUrlById(courseId);
  }

  create(course){
    return this.http.post(this.getUrl(), course)
  }

  update(course){
    //console.log("update book", book)
    return this.http.put(this.getUrlById(course.id), course)
  }

  delete(courseId){
    //console.log("delete book", bookId)
    return this.http.delete(this.getUrlById(courseId));
  }
  
}
