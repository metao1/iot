import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PersoInfoSharedModule} from '@persoinfo/shared.module';
import {EventManager} from "@persoinfo/event/EventManager";
import {DashboardModule} from "./dashboard/dashboard.module";

const routes = [
    /*{
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },*/
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
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
