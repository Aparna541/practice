import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { InformationComponent } from './information/information.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section2/section2.component';
import { Section1Component } from './section1/section1.component';
import { Section3Component } from './section3/section3.component';
import { ListModule } from './list/list.module';
import { AplhanumericDirective } from '../utils/only-alphanumeric.directive';
import { SharedModule } from '../shared/shared.module';

export const childroutes: Routes = [
  { path: '', component: EmployeeComponent,  children: [
  { path: 'section1', component: Section1Component }, 
  { path: 'section2',        component: Section2Component },
  // { path: 'section2/33/user/11', component: Section2Component }, 
  { path: '', component: Section1Component} ] }
 
];



@NgModule({
  declarations: [EmployeeComponent, InformationComponent, Section2Component, Section1Component,Section3Component],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(childroutes),
    ListModule,
    SharedModule
  ],
  exports: []
})
export class EmployeeModule { }
