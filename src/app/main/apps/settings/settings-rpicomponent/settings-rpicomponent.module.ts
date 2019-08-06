import {NgModule} from '@angular/core';

import {SettingsRPiComponentComponent} from './settings-rpicomponent.component';
import {RPiComponentAddComponent} from './rpicomponent-add/rpicomponent-add.component';
import {RPiComponentEditComponent} from './rpicomponent-edit/rpicomponent-edit.component';
import {RPiComponentFilterComponent} from './rpicomponent-table/rpicomponent-filter/rpicomponent-filter.component';
import {RPiComponentFormComponent} from './rpicomponent-form/rpicomponent-form.component';
import {RPiComponentListComponent} from './rpicomponent-table/rpicomponent-list/rpicomponent-list.component';
import {RPiComponentTableComponent} from './rpicomponent-table/rpicomponent-table.component';
import {RPiPinoutComponent} from './rpi-pinout/rpi-pinout.component';

import {SettingsRPiComponentService} from '@persoinfo/services/rpi-settings/settings-rpicomponent.service';
import {ComponentsModule} from "@persoinfo/components/components.module";

@NgModule({
  imports : [
    ComponentsModule
  ],
  exports: [
    SettingsRPiComponentComponent
  ],
  declarations: [
    RPiComponentAddComponent,
    RPiComponentEditComponent,
    RPiComponentFilterComponent,
    RPiComponentFormComponent,
    RPiComponentListComponent,
    RPiComponentTableComponent,
    RPiPinoutComponent,
    SettingsRPiComponentComponent
  ],
  providers: [
    SettingsRPiComponentService
  ]
})
export class SettingsRPiComponentModule {}
