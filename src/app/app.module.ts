import {NgModule, DoBootstrap, ApplicationRef, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';

import {PersoInfoModule} from '@persoinfo/perso-info.module';
import {PersoInfoSharedModule} from '@persoinfo/shared.module';

import {persoInfoConfig} from 'app/persoinfo-config';
import {AppComponent} from 'app/app.component';
import {AppStoreModule} from 'app/store/store.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {LoginModule} from 'app/main/login/login.module';
import {AppsModule} from './main/apps/apps.module';
import {DashboardModule} from './main/apps/dashboard/dashboard.module';
import { KeycloakAngularModule, KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from 'environments/environment';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const keycloakOptions: KeycloakOptions = {
    config: environment.keycloakConfig,
    initOptions: { onLoad: 'login-required', checkLoginIframe: false },
    enableBearerInterceptor: true,
};
const keycloakService = new KeycloakService();

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/main/login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: 'app/main/apps/dashboard/dashboard.module#DashboardModule'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        KeycloakAngularModule,
        AppsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
        StoreRouterConnectingModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        NgxWebstorageModule.forRoot({prefix: 'iot', separator: '-'}),
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        // Persoinfo modules
        PersoInfoModule.forRoot(persoInfoConfig),
        PersoInfoSharedModule,
        NgbModule,
        LoginModule,
        // App modules
        AppStoreModule,
        DashboardModule
    ],
    entryComponents: [AppComponent],
    providers: [
        {
          provide: KeycloakService,
          useValue: keycloakService
        }
      ],
})

export class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef): void {
        keycloakService
            .init(keycloakOptions)
            .then(() => appRef.bootstrap(AppComponent))
            .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
    }
}