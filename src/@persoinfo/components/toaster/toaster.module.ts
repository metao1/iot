import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule
} from '@angular/material';

import {ToasterComponent} from "./toaster.component";
import {ToastMessageComponent} from "./toast-message/toast-message.component";
import {ToasterService} from "./toaster.service";

@NgModule({
    declarations: [
        ToastMessageComponent,
        ToasterComponent
    ],
    providers:[
        ToasterService
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule
    ],
    exports: [
        ToastMessageComponent,
        ToasterComponent
    ]
})
export class ToasterModule {
}
