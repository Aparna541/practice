import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './employee/information/information.component';
import { EmployeeComponent } from './employee/employee.component';
import { PracticeComponent1} from './practice1/practice1.component';
import { childroutes } from './employee/employee.module';
import { Section3Component } from './employee/section3/section3.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.gaurd';



const routes: Routes = [
  { path: 'login',  component: LoginComponent }, 
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] }, 

 { path: 'about', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule), canActivate: [AuthGuard] },

 // { path: 'about', component: EmployeeComponent,    children: childroutes },
  { path: 'contact', loadChildren: () => import('./practice1/practice1.module').then(m => m.PracticeModule1), canActivate: [AuthGuard]},
//  { path: 'gallery', component:Section3Component, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

