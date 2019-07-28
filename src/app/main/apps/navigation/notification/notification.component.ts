import {Component, Input, OnInit} from '@angular/core';
import {NotificationService} from "@persoinfo/services/notification/notification.service";
import {Notification} from "@persoinfo/model/notification/notification.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input()
  notification: Notification;

  private detailsShown: boolean;

  constructor(
    private notificationService: NotificationService
  ) {
    this.detailsShown = false;
  }

  ngOnInit() {
  }

  toggleDetails() {
    this.detailsShown = !this.detailsShown;
  }

  updateState(notification: Notification) {
    this.notificationService.updateNotificationState(notification.id, !notification.isRead)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  delete(notification: Notification) {
    this.notificationService.deleteNotification(notification)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
