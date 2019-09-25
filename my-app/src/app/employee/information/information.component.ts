import { Component, OnInit, HostListener } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { InformationService } from './information.service';
export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [InformationService],
})
export class InformationComponent implements OnInit {
  employeesList: any[];
  employee: Employee;
  editEmp = false;
  constructor(public informationService : InformationService) { }


  
  ngOnInit() {
    this.employee = {'first_name': '','last_name': '','email': ''};
    this.getEmployees();
  }

  getEmployees() {
    // const headers = new HttpHeaders();
   // headers.set('Content-Type','application/json');
  //  headers.set('Content-Type','application/json');
  //  headers.set('token', 'my-new-auth-token');

  const httpOptions = {
    headers: new HttpHeaders({
   //  'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
    })
  };

 // headers.set('token', loginToken);
  

  // httpOptions.headers.set('Accept', 'application/text');
    this.informationService.getEmployeesAPI().subscribe((res: any) => {
      console.log('respones', res);
      this.employeesList = res;
    }, err => { 
      console.log(err);
      if (err.status === 401) {
          // go to login page
      }
    });
  }

  addEmployee() {
    this.employee.id = this.employeesList.length+1;
    this.informationService.addEmployeeAPI(this.employee).subscribe((res: any) => {
      console.log('respones', res);
      debugger;
      //this.employeesList.push(res);
      this.getEmployees();

    },(err) => { console.log(err)}, () => { });
  }

  editEmployee(employeeIndex){
    this.editEmp = true;
    this.employee = this.employeesList[employeeIndex];
  }

  updateEmployee() {
    this.informationService.updateEmployeeAPI(this.employee.id ,this.employee).subscribe((res: any) => {
      console.log('respones', res);
      debugger;
      //this.employeesList.push(res);
      this.getEmployees();

    }, err => { 
      console.log(err);
      if (err.status === 401) {
          // go to login page
      }
    });
  }

  // updaModel(event) {
  //   debugger;
  //   this.employee.first_name = event.target.value;
  // }

  updaModel(event) {
    this.employee.first_name = event;
  }

}




