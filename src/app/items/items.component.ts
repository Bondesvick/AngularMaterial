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
    this.loadCourses();
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


  saveLesson(course){
    if(course.id){
      this.bookService.update(course);
    } else{
      this.bookService.create(course)
      .subscribe(result => this.loadCourses());
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
