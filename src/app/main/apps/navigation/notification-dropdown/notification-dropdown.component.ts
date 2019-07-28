import {Component, OnDestroy, OnInit} from '@angular/core';
import {Page} from "@persoinfo/model/paging/page.model";
import {NotificationView} from "@persoinfo/model/notification/notification-view.enum";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {NotificationService} from "@persoinfo/services/notification/notification.service";

@Component({
    selector: 'app-notification-dropdown',
    templateUrl: './notification-dropdown.component.html',
    styleUrls: ['./notification-dropdown.component.css']
})
export class NotificationDropdownComponent implements OnInit, OnDestroy {

    public read: Page<Notification>;
    public unread: Page<Notification>;
    private readSubscription;
    private unreadSubscription;
    private notificationView = NotificationView;
    private notificationViewSelected: NotificationView = NotificationView.UNREAD;

    constructor(
        private notificationService: NotificationService,
        private toasterService: ToasterService
    ) {
    }

    ngOnInit() {
        /*this.readSubscription = this.notificationService.readSubscription
          .subscribe(
            data => this.read = data,
            error => this.toasterService.toast("Error subscribing to read notifications", ToastType.WARNING)
          );
        this.unreadSubscription = this.notificationService.unreadSubscription
          .subscribe(
            data => this.unread = data,
            error => this.toasterService.toast("Error subscribing to unread notifications", ToastType.WARNING)
          );*/
    }

    changeView(view: NotificationView) {
        this.notificationViewSelected = view;
    }

    ngOnDestroy() {
        if (this.readSubscription) {
            this.readSubscription.unsubscribe();
        }
        if (this.unreadSubscription) {
            this.unreadSubscription.unsubscribe();
        }
    }

}
