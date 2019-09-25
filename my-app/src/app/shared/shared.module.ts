import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplhanumericDirective } from '../utils/only-alphanumeric.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../authorization.interceptor';
import { ErrorInterceptor } from '../error.interceptor';



@NgModule({
  declarations: [AplhanumericDirective],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [AplhanumericDirective]
})
export class SharedModule { }
