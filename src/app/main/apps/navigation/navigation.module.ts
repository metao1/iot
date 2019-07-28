import {NgModule} from '@angular/core';

import {NavigationComponent} from './navigation.component';
import {NotificationDropdownComponent} from './notification-dropdown/notification-dropdown.component';
import {NotificationComponent} from './notification/notification.component';
import {NotificationListComponent} from './notification-list/notification-list.component';
import {NotificationInfiniteScrollDirective} from './notification-list/notification-infinite-scroll.directive';
import {ComponentsModule} from "@persoinfo/components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NotificationDropdownComponent, NotificationComponent, NotificationListComponent, NotificationInfiniteScrollDirective]
})
export class NavigationModule {}
