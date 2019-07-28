import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DASHBOARD_ROUTES} from './dashboard.routing';

import {DashboardComponent} from './dashboard.component';
import {DashboardComponentsModule} from "app/main/apps/dashboard-components/dashboard-components.module";
import {ComponentsModule} from "@persoinfo/components/components.module";

@NgModule({

    imports: [
        DashboardComponentsModule,
        ComponentsModule,
        RouterModule.forChild(DASHBOARD_ROUTES)
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
