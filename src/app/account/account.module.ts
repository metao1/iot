import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {
    ActivateComponent,
    PasswordComponent,
    PasswordResetFinishComponent,
    PasswordResetInitComponent,
    PasswordStrengthBarComponent,
    RegisterComponent,
    SettingsComponent,
    accountState,
} from './';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { PersonComponent } from './t/person/person.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SettingsComponent,
        PersonComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationAccountModule {
}
