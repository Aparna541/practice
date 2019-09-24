import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data = 'dsfdfsdfsd';

  constructor(public router: Router, private route: ActivatedRoute, private appService: AppService, public messageService: MessageService) { 
  }

  ngOnInit() {
    this.messageService.getMessage().subscribe((response) => { 
      console.log(response);
      this.data = response;
    });
  }

  

  tabChange(tabName) {
    this.router.navigate([tabName], {relativeTo: this.route, skipLocationChange: false});
    // this.router.navigateByUrl('section2/33/user/11', {relativeTo: this.route})
  }

}
