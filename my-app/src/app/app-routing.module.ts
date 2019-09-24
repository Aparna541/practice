import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './employee/information/information.component';
import { EmployeeComponent } from './employee/employee.component';
import { PracticeComponent1} from './practice1/practice1.component';
import { childroutes } from './employee/employee.module';
import { Section3Component } from './employee/section3/section3.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'home',  component: HomeComponent }, 
 { path: 'about', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },

 // { path: 'about', component: EmployeeComponent,    children: childroutes },
  { path: 'contact', loadChildren: () => import('./practice1/practice1.module').then(m => m.PracticeModule1)},
//  { path: 'gallery', component:Section3Component},
  { path: '', component: HomeComponent },
  { path: '**', component:  HomeComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

