import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { InformationComponent } from './information/information.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [EmployeeComponent, InformationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [EmployeeComponent, InformationComponent]
})
export class EmployeeModule { }
