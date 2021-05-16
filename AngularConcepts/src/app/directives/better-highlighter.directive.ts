import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{

  @Input('defaultColor') defaultColor: string = 'transparent';
  @Input('highlightColor') highlightColor: string = 'yellow';
  /*We got another decorator we can use which then allows us to not use the renderer.
    There is nothing wrong with using the renderer but we get an even easier way of simply changing the background color if that is all we want to do in the directive.

    Again using the renderer is not wrong though. The decorator I'm referring to is called @HostBinding */
  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    /* More about Renderer2 : https://angular.io/api/core/Renderer2
    Using the renderer which is a better approach of accessing the DOM.
    Now why is it a better approach?
    Angular is not limited to running in the browser here, it for example also works with service workers and these are environments where you might not have access to the DOM.

    So if you try to change the DOM as you did here in basic highlight by directly accessing the nativeElement and the style of this element, you might get an error in some circumstances.

    Now to be honest, in most circumstances you probably don't and you probably also know if your app is going to run in the browser or not, still it is a better practice to use the renderer for DOM access and to use the methods the renderer provides to access the DOM.
     */
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.el.nativeElement,'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
