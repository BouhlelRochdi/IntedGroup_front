import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[dynamicChildLoader]',
})
export class DynamicChildLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
