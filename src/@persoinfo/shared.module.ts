import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {PersoInfoPipesModule} from '@persoinfo/pipes/pipes.module';
import {ScrollableDirective} from "@persoinfo/directive/scrollable/scrollable.directive";
import {NavigationModule} from "app/main/apps/navigation/navigation.module";
import {ServicesModule} from "@persoinfo/services/services.module";
import {ToasterModule} from "@persoinfo/components/toaster/toaster.module";
import {DashboardModule} from "../app/main/apps/dashboard/dashboard.module";

@NgModule({
    imports: [
        ServicesModule,
        DashboardModule,
        ToasterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PersoInfoPipesModule,
        NavigationModule
    ],
    declarations: [
        ScrollableDirective
    ],
    exports: [
        ServicesModule,
        ToasterModule,
        CommonModule,
        FormsModule,
        DashboardModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PersoInfoPipesModule,
        NavigationModule
    ]
})
export class PersoInfoSharedModule {
}
