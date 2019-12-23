import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LOGIN_ROUTING} from 'app/main/login/login.routing';

import {LoginComponent} from 'app/main/login/login.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ComponentsModule} from '@persoinfo/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(LOGIN_ROUTING)
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule {}
