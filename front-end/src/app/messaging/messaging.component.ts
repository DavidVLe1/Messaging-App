import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../_services/messaging.service';
import {UserObject} from '../_models/user-object.model';
@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent implements OnInit {


  // public newUsername;
  // public usernames;
  // public blankUsername = new UserObject('');
  // constructor(private messagingService: MessagingService) { }
  // This code above breaks the link to the messaging page when clicking the nav bar
  constructor() { }

  ngOnInit(): void {
    // this.messagingService.getAll().subscribe(returnNames => {
    //   this.usernames = returnNames.docs;
    // });
  }
  //
  // saveUsername(): void {
  //   this.messagingService.create(this.newUsername).subscribe( saveName => {
  //     this.usernames.push(saveName);
  //   });
  // }
}
