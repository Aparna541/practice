import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeModule123 } from './employee123/employee123.module';
import { PracticeModule1 } from './practice1/practice1.module';
// import { AlertModule } from 'ngx-bootstrap';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    EmployeeModule123,
    PracticeModule1,
   // AlertModule.forRoot(),
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
