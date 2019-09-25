import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentTab = 'Home';

  constructor(private appService: AppService, public router: Router) {
    
  }

  ngOnInit() {
   // this.appService.loginToken = '1232321312312';
  }

  tabClicked(menu) {
    this.currentTab = menu;
  }

  logout() {
    this.appService.loginToken = undefined;
    this.router.navigate(['/login']);
    //location.reload(true);
  }

  isLogin() {
    return !this.router.url.includes('/login');
  }
}
