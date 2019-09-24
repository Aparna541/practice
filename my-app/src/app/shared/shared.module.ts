import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplhanumericDirective } from '../utils/only-alphanumeric.directive';



@NgModule({
  declarations: [AplhanumericDirective],
  imports: [
    CommonModule
  ],
  exports: [AplhanumericDirective]
})
export class SharedModule { }
