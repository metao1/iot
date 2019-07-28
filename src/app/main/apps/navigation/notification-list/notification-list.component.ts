import {Component, Input, OnInit} from '@angular/core';

import {Notification} from '@persoinfo/model/notification/notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  @Input()
  notifications: Array<Notification>;

  constructor() {
    this.notifications = new Array<Notification>();
  }

  ngOnInit() {
  }

}
