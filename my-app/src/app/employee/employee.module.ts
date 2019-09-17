import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { InformationComponent } from './information/information.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section2/section2.component';
import { Section1Component } from './section1/section1.component';

export const childroutes: Routes = [
  { path: '', component: Section2Component }, 
  { path: 'section1', component: Section1Component }, 
  { path: 'section2',        component: Section2Component },
 
];


@NgModule({
  declarations: [EmployeeComponent, InformationComponent, Section2Component, Section1Component],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,RouterModule
   // RouterModule.forChild(routes)

  ],
  exports: [EmployeeComponent, InformationComponent]
})
export class EmployeeModule { }
