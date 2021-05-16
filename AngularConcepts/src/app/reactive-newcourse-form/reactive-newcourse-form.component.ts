import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-newcourse-form',
  templateUrl: './reactive-newcourse-form.component.html',
  styleUrls: ['./reactive-newcourse-form.component.css']
})
export class ReactiveNewcourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopics(topic: HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
   }
}
