import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-child-form',
  templateUrl: './reactive-child-form.component.html',
})
export class ReactiveChildFormComponent implements OnInit {

  @Input() ageForm : FormGroup;

  constructor() { }

  ngOnInit() { this.createForm(); }

  createForm() {
    this.ageForm.addControl("age", new FormControl('', Validators.required));
  }
}
