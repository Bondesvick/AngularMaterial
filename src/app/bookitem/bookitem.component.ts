import { Component, OnInit } from '@angular/core';
import {BookService} from "./../shared/services/book.service"

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.scss']
})
export class BookitemComponent implements OnInit {

  selectectBook = null;

  constructor(private bookList: BookService) { }

  ngOnInit(): void {
    this.resetSelectedBook();
  }

  saveBook(book){
    console.log("Save Book!", book);
  }

  resetSelectedBook(){
    const book = {
      id: null,
      title: "",
      percentage: 0,
      favorite: false
    }

    this.selectectBook = book;
  }

  cancel(){
    this.resetSelectedBook();
  }

}
