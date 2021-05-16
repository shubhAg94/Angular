import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'form'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(firstname){
    console.log(firstname);
  }

  submit(form){
    console.log(form);
  }
}
