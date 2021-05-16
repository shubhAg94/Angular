import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
//This directive is opposite of *ngIf
export class UnlessDirective {

  /* So whenever some input parameter here changes, I want to execute a method and therefore, I can implement a setter with the set keyword.

  This now turns this into a method, though technically and that's important to understand, this still is a property, it's just a setter of the property which is a method which gets executed whenever the property changes and it of course changes whenever it changes outside of this directive, so whenever the condition we pass changes or some parameter of this condition. */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  /* Keep in mind that our unless directive here in the end will sit on such an ng-template component because that is what it gets transformed to by Angular if we use the star.
  So we can get access to this template and we also need to get access to the place in the document where we want to render it, both can be injected. 
  
  The template can be injected by adding templateRef, so just like elementRef gave us access to the element the directive was on, templateRef does the same for a template and this is a generic type, you can simply pass <any> here.

  The second information we need is the view container, so where should we render it?
  The template is the what, now the question is where?

  So I'll name it vcRef for view container reference and the type is viewContainerRef.
  That marks the place where we placed this directive in the document, Angular marks this place and you can see this if you inspect it in the developer tools actually.

  So with these two tools available, we can use the vcRef whenever the condition changes, to call the createEmbeddedView() method which does just what the name implies, it creates a view in this view container And the view simply is our templateRef.
  So this template we created there is exactly this reference to the template there, is exactly what we need.
  */
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
