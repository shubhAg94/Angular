import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-trackby',
  templateUrl: './ngfor-trackby.component.html',
})
export class NgforTrackbyComponent implements OnInit {

  courses: {}[];

  constructor() { }

  ngOnInit(): void {
  }

  loadCourses(){
    this.courses = [
      {id:1, name: 'course1'},
      {id:2, name: 'course2'},
      {id:3, name: 'course3'}
    ];
  }

  trackCourse(index, course){
    console.log(index, course);
    return course ? course.id : undefined;
  }

  addCourse(){
    this.courses.push({id:4, name: 'course4'});
  }
}
