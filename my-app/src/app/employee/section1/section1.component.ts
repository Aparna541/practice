import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  userName = 'New Ali'
  constructor(private appService: AppService, public messageService: MessageService) { 
    
  }

  ngOnInit() {
    this.messageService.sendMessage('section1');

  }

}
