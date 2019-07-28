import {Routes} from '@angular/router';

import {DashboardComponent} from 'app/main/apps/dashboard/dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent
        /*,
        resolve: {
            humidityService: HumiditySensorService
        }*/
    },
    {
        path: 'builder',
        loadChildren: 'app/main/apps/dashboard-builder/dashboard-builder.module#DashboardBuilderModule'
    }
];
