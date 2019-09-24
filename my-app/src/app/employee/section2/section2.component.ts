import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MessageService } from 'src/app/message.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
 // providers: [MessageService]
})
export class Section2Component implements OnInit {
  data: any;
  constructor(private appService: AppService, public messageService: MessageService) { 
    this.messageService.sendMessage('section2');
  }

  ngOnInit() {
    
  }


}
