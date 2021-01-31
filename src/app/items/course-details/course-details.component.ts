import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent{

@Input() course;
@Output() saveCourse = new EventEmitter();
@Output() cancelCourse = new EventEmitter();
}
