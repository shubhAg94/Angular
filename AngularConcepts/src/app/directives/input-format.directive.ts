import { Input } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  //@Input('format') format;
  @Input('appInputFormat') format;

  constructor(private el : ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log("On Focus");
  }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;
    if(this.format === 'lowercase'){
      this.el.nativeElement.value = value.toLowerCase();
    } else{
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
