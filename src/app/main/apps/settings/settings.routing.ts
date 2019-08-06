import {SettingsComponent} from 'app/main/apps/settings/settings.component';
import {SettingsScheduleComponent} from 'app/main/apps/settings/settings-schedule/settings-schedule.component';
import {SettingsUserComponent} from 'app/main/apps/settings/settings-user/settings-user.component';

export const SETTINGS_ROUTES = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: 'schedule',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        component: SettingsScheduleComponent,
                        outlet: 'settings'
                    }
                ]
            },
            {
                path: 'component',
                component: SettingsComponent
            },
            {
                path: 'user',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        component: SettingsUserComponent,
                        outlet: 'settings'
                    }
                ]
            },
            {
                path: 'rpi',
                loadChildren: 'app/main/apps/settings/settings-rpi/settings-rpi.module#SettingsRPiModule'
            },
        ]
    }
];
