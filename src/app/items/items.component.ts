import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  selectedLesson = null

  courseLessons = null;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.resetLesson();
    console.log("hello")
    this.bookService.all()
    .subscribe(courses => this.courseLessons = courses);
    
  }

  resetLesson(){
    const emptyLesson ={
      id: null,
      title: "",
      percentage: 0, 
      favorite: false
    }

    this.selectedLesson = emptyLesson;
  }

  saveLesson(lesson){
    if(lesson.id){
      this.bookService.update(lesson);
    } else{
      this.bookService.create(lesson)
      .subscribe(result => console.log("COURSE CREATED", result));
    }
    
  }

  selectLesson(lesson){
    this.selectedLesson = lesson
  }

  cancel(){
    this.resetLesson();
  }

  deleteLesson(lessonId){
    console.log(lessonId);
    this.bookService.delete(lessonId);
  }

}
