import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UiSwitchModule} from 'angular2-ui-switch';

import {SettingsRPiModule} from './settings-rpi/settings-rpi.module';
import {SettingsRPiComponentModule} from './settings-rpicomponent/settings-rpicomponent.module';

import {SettingsComponent} from './settings.component';
import {SettingsNavigationComponent} from './settings-navigation/settings-navigation.component';
import {SettingsScheduleComponent} from './settings-schedule/settings-schedule.component';
import {SettingsUserComponent} from './settings-user/settings-user.component';
import {RelayScheduleFormComponent} from './settings-schedule/relay-schedule-form/relay-schedule-form.component';
import {RelayScheduleListComponent} from './settings-schedule/relay-schedule-list/relay-schedule-list.component';
import {ComponentsModule} from "@persoinfo/components/components.module";
import {SETTINGS_ROUTES} from "./settings.routing";


@NgModule({
  imports: [
    ComponentsModule,
    UiSwitchModule,
    SettingsRPiModule,
    SettingsRPiComponentModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  exports: [SettingsComponent],
  declarations: [
    SettingsComponent,
    SettingsNavigationComponent,
    SettingsScheduleComponent,
    SettingsUserComponent,
    RelayScheduleFormComponent,
    RelayScheduleListComponent,
  ]
})
export class SettingsModule {}
