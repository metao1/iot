import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PersoInfoSharedModule} from '@persoinfo/shared.module';
import {EventManager} from "@persoinfo/event/EventManager";
import {UserRouteAccessService} from "@persoinfo/services/authentication";
import { AuthGuard } from '@persoinfo/services/authentication/auth/auth-guard';

const routes = [
    {
        path: 'settings',
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dashboard.title'
        },
        loadChildren: 'app/main/apps/settings/settings.module#SettingsModule',
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dashboard',
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dashboard.title'
        },
        loadChildren: 'app/main/apps/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]

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
