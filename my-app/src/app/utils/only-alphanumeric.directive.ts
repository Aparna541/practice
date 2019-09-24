import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector: '[appAplhanumeric]'
})
export class AplhanumericDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
      //  this.ChangeBgColor('red');
       // this.el.nativeElement.style.color = 'blue'
    }
    // ChangeBgColor(color: string) {
    //     this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    // }

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;


    
  @HostListener('keydown',['$event'])
  onKeyDown(e: KeyboardEvent) {
    debugger;
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || 
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return;  // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 90)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }

    this.color = 'blue';
    this.borderColor = "red";
    
  }

}