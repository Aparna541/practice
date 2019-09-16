import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  employeesList: any[];
  employee: Employee;
  editEmp = false;
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.employee = {'first_name': '','last_name': '','email': ''};
    this.getEmployees();
  }

  getEmployees() {
    this.httpClient.get('http://localhost:3000/employees').subscribe((res: any) => {
      console.log('respones', res);
      this.employeesList = res;
    });
  }

  addEmployee() {
    this.employee.id = this.employeesList.length+1;
    this.httpClient.post('http://localhost:3000/employees/',this.employee).subscribe((res: any) => {
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
    this.httpClient.put('http://localhost:3000/employees/'+ this.employee.id ,this.employee).subscribe((res: any) => {
      console.log('respones', res);
      debugger;
      //this.employeesList.push(res);
      this.getEmployees();

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
