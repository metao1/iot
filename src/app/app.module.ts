import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {PersoInfoModule} from '@persoinfo/perso-info.module';
import {PersoInfoSharedModule} from '@persoinfo/shared.module';

import {persoInfoConfig} from 'app/persoinfo-config';
import {AppComponent} from 'app/app.component';
import {AppStoreModule} from 'app/store/store.module';
import {AuthInterceptor} from "app/core/interceptor/auth.interceptor";
import {AuthExpiredInterceptor} from "app/core/interceptor/auth-expired.interceptor";
import {ErrorHandlerInterceptor} from "app/core/interceptor/errorhandler.interceptor";
import {NotificationInterceptor} from "app/core/interceptor/notification.interceptor";
import {UserRouteAccessService} from "app/core";
import {NgxWebstorageModule} from "ngx-webstorage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {LoginModule} from "app/main/login/login.module";
import {ToasterModule} from "@persoinfo/components/toaster/toaster.module";
import {ComponentsModule} from "@persoinfo/components/components.module";

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/main/login/login.module#LoginModule'
    },
    {
        path: 'dashboard',
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dashboard.title'
        },
        loadChildren: 'app/main/apps/dashboard/dashboard.module#DashboardModule',
        canActivate: [UserRouteAccessService]

    },/*
    {
        path: 'scheduling',
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dashboard.title'
        },
        loadChildren: 'app/main/apps/dashboard/dashboard.module#DashboardModule',
        canActivate: [UserRouteAccessService]

    },*/
    /*{
        path: 'settings',
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'dashboard.title'
        },
        loadChildren: 'app/main/settings/settings.module#SettingsModule',
        canActivate: [UserRouteAccessService]
    },*/
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        NgxWebstorageModule.forRoot({prefix: 'jhi', separator: '-'}),
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
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
        //authentication module
        LoginModule,
        // App modules
        AppStoreModule,
        ComponentsModule,
        ToasterModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ]
})
export class AppModule {
}
