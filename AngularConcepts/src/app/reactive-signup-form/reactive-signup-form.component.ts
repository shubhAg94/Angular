import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'reactive-signup-form',
  templateUrl: './reactive-signup-form.component.html',
  styleUrls: ['./reactive-signup-form.component.css']
})
export class ReactiveSignupFormComponent implements OnInit {

  form = new FormGroup({
    //username: new FormControl('', Validators.required), //Single Validator
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
    UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  get username(){
    return this.form.get('username');
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
