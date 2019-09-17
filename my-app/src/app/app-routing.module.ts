import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './employee/information/information.component';
import { EmployeeComponent } from './employee/employee.component';
import { PracticeComponent1} from './practice1/practice1.component';
import { childroutes } from './employee/employee.module';



const routes: Routes = [
  { path: 'home', component: InformationComponent }, 
  { path: 'employees',  component: EmployeeComponent,    children: childroutes },
  { path: 'practice1',  component: PracticeComponent1 , data : { title: 'Details' }},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: EmployeeComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

