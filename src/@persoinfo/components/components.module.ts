import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';

import {AlertComponent} from '@persoinfo/components/alert/alert.component';
import {PanelListGroupComponent} from '@persoinfo/components/panel-list-group/panel-list-group.component';
import {UnauthorizedComponent} from '@persoinfo/components/unauthorized/unauthorized.component';
import {KeyToTitlePipe} from '@persoinfo/pipes/key-to-title/key-to-title.pipe';
import {KeyExtractPipe} from '@persoinfo/pipes/key-extract/key-extract.pipe';
import {CelsiusToFahrenheitPipe} from '@persoinfo/pipes/celsius-to-fahrenheit/celsius-to-fahrenheit.pipe';
import {SimpleLoaderComponent} from '@persoinfo/components/simple-loader/simple-loader.component';
import {PageLoaderComponent} from '@persoinfo/components/page-loader/page-loader.component';
import {ModalConfirmComponent} from '@persoinfo/components/modal-confirm/modal-confirm.component';
import {FileUploaderComponent} from '@persoinfo/components/file-uploader/file-uploader.component';
import {ContentModule} from "@persoinfo/components/content/content.module";

@NgModule({
    imports: [
        CommonModule,
        FileUploadModule,
        FormsModule,
        ContentModule,
        ReactiveFormsModule,
    ],
    exports: [
        AlertComponent,
        CelsiusToFahrenheitPipe,
        CommonModule,
        FileUploaderComponent,
        FormsModule,
        KeyToTitlePipe,
        KeyExtractPipe,
        ModalConfirmComponent,
        PageLoaderComponent,
        PanelListGroupComponent,
        ReactiveFormsModule,
        RouterModule,
        ContentModule,
        SimpleLoaderComponent,
        UnauthorizedComponent,
        ModalConfirmComponent
    ],
    declarations: [
        AlertComponent,
        CelsiusToFahrenheitPipe,
        FileUploaderComponent,
        KeyToTitlePipe,
        KeyExtractPipe,
        ModalConfirmComponent,
        PageLoaderComponent,
        PanelListGroupComponent,
        SimpleLoaderComponent,
        UnauthorizedComponent
    ]
})
export class ComponentsModule {
}