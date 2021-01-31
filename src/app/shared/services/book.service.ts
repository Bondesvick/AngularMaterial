import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:3001/";

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private model ="courses";

  private courseLessons = [
    {id: 1, title: "Hello Angular",percentage: 20, favorite: false},
    {id: 2, title: "Hello Victor" ,percentage: 60, favorite: true},
    {id: 3, title: "Another one", percentage: 10, favorite: false},
    {id: 4, title: "Hello Harry", percentage: 45, favorite: true},
    {id: 5, title: "Hello Harry", percentage: 20, favorite: true},
    {id: 6, title: "Hello Harry", percentage: 0, favorite: false},
    {id: 7, title: "Hello Harry", percentage: 2, favorite: true},
    {id: 8, title: "Hello Harry", percentage: 20, favorite: false},
    {id: 9, title: "Hello Harry", percentage: 20, favorite: false},
    {id: 10, title: "Hello Harry", percentage: 20, favorite: false}
  ]

  constructor(private http: HttpClient) { }

  private getUrl = () => `${BASE_URL}${this.model}`;
  

  all(){
    return this.http.get(this.getUrl());
  }

  find(bookId){

  }

  create(course){
    return this.http.post(this.getUrl(), course)
  }

  update(book){
    console.log("update book", book)
  }

  delete(bookId){
    console.log("delete book", bookId)
  }
}
