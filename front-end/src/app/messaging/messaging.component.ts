import { Component, OnInit } from '@angular/core';
import {MessageService} from '../_services/messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent implements OnInit {

  newMessage: string;
  User: string;
  messageList: string[] = [''];

  constructor(private messageService: MessageService) {
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.newMessage, this.User);
    this.newMessage = '';
  }

  ngOnInit() {
    this.messageService.getMessages().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }

}
