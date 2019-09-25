import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from 'src/app/app.service';

@Injectable()
export class InformationService {
  constructor(public httpClient: HttpClient, public appService: AppService) { }

  getEmployeesAPI () {
    
  
    return this.httpClient.get(this.appService.appURL+'employees');
  }

  addEmployeeAPI (employee) {
    
    return this.httpClient.post(this.appService.appURL+ 'employees/', employee);
  }

  updateEmployeeAPI(id,employee) {
  
  
    return this.httpClient.put(this.appService.appURL+ 'employees/'+id, employee);
  }
}
