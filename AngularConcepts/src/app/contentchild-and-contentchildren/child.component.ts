import { Component, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'child',
  template: `<ng-content></ng-content>`
})
export class ChildComponent implements AfterContentInit {
    @ContentChild('childTempRef') el: ElementRef;

    ngAfterContentInit(){
      console.log("ngAfterContentInit for <ng-content> : "+this.el.nativeElement.textContent);
    }
} 