import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentTab = 'Home';

  constructor(private appService: AppService) {
    
  }

  ngOnInit() {
    this.appService.loginToken = '1232321312312';
  }

  tabClicked(menu) {
    this.currentTab = menu;
  }
}
