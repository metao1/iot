import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PersoInfoSharedModule} from '@persoinfo/shared.module';
import {EventManager} from "@persoinfo/event/EventManager";
import {DashboardModule} from "./dashboard/dashboard.module";
import {UserRouteAccessService} from "../../../@persoinfo/services/authentication";

const routes = [
    /*{
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },*/
    {
        path: 'dashboard',
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dashboard.title'
        },
        loadChildren: 'app/main/apps/dashboard/dashboard.module#DashboardModule',
        canActivate: [UserRouteAccessService]

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        PersoInfoSharedModule
    ],
    providers: [
        EventManager
    ]
})
export class AppsModule {
}
