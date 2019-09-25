import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';

import { PracticeModule1 } from './practice1/practice1.module';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { from } from 'rxjs';
import { InformationComponent } from './employee/information/information.component';
import { MessageService } from './message.service';
import { AplhanumericDirective } from './utils/only-alphanumeric.directive';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authorization.interceptor';
// import { AlertModule } from 'ngx-bootstrap';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,


    // SharedModule
   // EmployeeModule,
   // PracticeModule1,
   // AlertModule.forRoot(),
    // NgbModule
  ],
  providers: [{ provide: AppService, useClass: AppService }, MessageService,
  //  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
