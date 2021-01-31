import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent{

  @Input() courseLessons;
  @Output() selectLesson = new EventEmitter();
  @Output() deleteLesson = new EventEmitter();

}
