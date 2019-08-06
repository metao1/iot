import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';

import {RPiAddComponent} from './rpi-add/rpi-add.component';
import {RPiComponent} from './rpi/rpi.component';
import {RPiComponentTableComponent} from './rpicomponent-table/rpicomponent-table.component';
import {RPiComponentFilterComponent} from './rpicomponent-table/rpicomponent-filter/rpicomponent-filter.component';
import {RPiDetailsComponent} from './rpi-details/rpi-details.component';
import {RPiFormComponent} from './rpi-form/rpi-form.component';
import {RPiListComponent} from './rpi-list/rpi-list.component';
import {RPiPinoutComponent} from './rpi-pinout/rpi-pinout.component';
import {SettingsRPiComponent} from './settings-rpi.component';
import {SettingsRPiComponentService} from '@persoinfo/services/rpi-settings/settings-rpicomponent.service';
import {SETTINGS_RPI_ROUTES} from './settings-rpi.routing';
import {RPiComponentFilterPipe} from './rpicomponent-table/rpicomponent-filter/rpicomponent-filter.pipe';
import {RPiUploadImageComponent} from './rpi-upload-image/rpi-upload-image.component';
import {RPiComponentFormComponent} from './rpicomponent-form/rpicomponent-form.component';
import {RPiComponentAddComponent} from './rpicomponent-add/rpicomponent-add.component';
import {ComponentsModule} from "@persoinfo/components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    FileUploadModule,
    RouterModule.forChild(SETTINGS_RPI_ROUTES)
  ],
  exports: [
    SettingsRPiComponent
  ],
  declarations: [
    RPiAddComponent,
    RPiComponent,
    RPiComponentTableComponent,
    RPiComponentFilterComponent,
    RPiDetailsComponent,
    RPiFormComponent,
    RPiListComponent,
    RPiPinoutComponent,
    SettingsRPiComponent,
    RPiComponentFilterPipe,
    RPiUploadImageComponent,
    RPiComponentFormComponent,
    RPiComponentAddComponent
  ],
  providers: [
    SettingsRPiComponentService
  ]
})
export class SettingsRPiModule { }
