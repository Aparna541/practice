import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input('empList') employeesList: any[];
  @Output() edit: EventEmitter<any> = new EventEmitter();
  constructor() { 
    console.log('fdsd');
  }

  ngOnInit() {
  }

  editEmp(index) {
    this.edit.emit(index);
  }

  ngOnChanges () {

  }
  ngDoCheck () {
    
  }

  ngAfterViewInit () {
    
  }
  ngAfterViewChecked () {
    
  }
  ngAfterContentInit () {
    
  }
  ngAfterContentChecked () {
    
  }
  ngOnDestroy () {
    
  }
}




