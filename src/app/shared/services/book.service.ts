import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

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

  constructor() { }

  all(){
    return this.courseLessons;
  }

  find(bookId){

  }

  create(book){
    console.log("create book", book)
  }

  update(book){
    console.log("update book", book)
  }

  delete(bookId){
    console.log("delete book", bookId)
  }
}
