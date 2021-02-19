import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  @HostListener('click') toggleOpen() {
    // console.log(this.isOpen);
    // this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.isOpen = true;
      this.renderer.addClass(this.el.nativeElement.querySelector('div'), 'open');
    } else {
      this.isOpen = false;
      this.renderer.removeClass(this.el.nativeElement.querySelector('div'), 'open');
    }
  }

  @HostListener('document:click', ['$event']) toggleClose(event: Event) {
    console.log(this.el.nativeElement.contains(event.target));
    if (!this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.renderer.removeClass(this.el.nativeElement.querySelector('div'), 'open');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

}
