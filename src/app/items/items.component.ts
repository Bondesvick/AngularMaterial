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
    this.refreshCourses();
  }

  loadCourses(){
    this.bookService.all()
    .subscribe(courses => this.courseLessons = courses);
  }

  resetLesson(){
    const emptyLesson ={
      id: null,
      title: "",
      description: "",
      percentage: 0, 
      favorite: false
    }

    this.selectedLesson = emptyLesson;
  }

  refreshCourses(){
    this.resetLesson()
    this.loadCourses()
  }

  saveLesson(course){
    if(course.id){
      this.bookService.update(course)
      .subscribe(result => this.refreshCourses());;
    } else{
      this.bookService.create(course)
      .subscribe(result => this.refreshCourses());
    }
  }

  selectLesson(lesson){
    this.selectedLesson = lesson
  }

  cancel(){
    this.resetLesson();
  }

  deleteLesson(lessonId){
    this.bookService.delete(lessonId)
    .subscribe(result => this.refreshCourses());
  }

}
