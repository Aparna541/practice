import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { 
    debugger;
  }

  ngOnInit() {
  }

  ngOnChanges () {

  }
  ngDoCheck () {
    
  }

  ngAfterViewInit () {
    
  }
  ngAfterViewChecked () {
    
  }
  ngAfterConentInit () {
    
  }
  ngAfterConentChecked () {
    
  }
  ngOnDestroy () {
    
  }

  tabChange(tabName) {
    this.router.navigate([tabName], {relativeTo: this.route});
  }

}
