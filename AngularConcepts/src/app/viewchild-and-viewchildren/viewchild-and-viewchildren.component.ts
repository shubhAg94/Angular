import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BaconDirective } from './bacon.directive';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'viewchild-and-viewchildren',
  templateUrl: './viewchild-and-viewchildren.component.html',
  styleUrls: ['./viewchild-and-viewchildren.component.css']
})
export class ViewchildAndViewchildrenComponent implements AfterViewInit {

  name = 'Angular';

  extraIngredient: string;

  @ViewChild(BaconDirective)
  set appBacon(directive: BaconDirective) {
    this.extraIngredient = directive.ingredient;
    console.log("Inside property : "+this.extraIngredient);
  };

  @ViewChild('inputText') inputText :ElementRef;

  @ViewChild(HelloComponent) helloChild: HelloComponent;

  @ViewChildren(HelloComponent) helloChildren: QueryList<any>;

  ngAfterViewInit() {
    console.log('Hello ', this.helloChild.name);  

    console.log("Inside ngAfterViewInit : "+this.extraIngredient); // mayo

    this.helloChildren.forEach(helloChild => console.log(helloChild));
  }

  submit(){
    console.log("Template reference : "+this.inputText.nativeElement.value); 
  }
}
