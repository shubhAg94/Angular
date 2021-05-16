import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-parent-form',
  templateUrl: './reactive-parent-form.component.html',
})
export class ReactiveParentFormComponent implements OnInit {

  myFormFather: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { this.createForm() }

  createForm() {
    this.myFormFather = this.fb.group({
      nickName: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.myFormFather);
  }

}
