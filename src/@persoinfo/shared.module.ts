import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {PersoInfoPipesModule} from '@persoinfo/pipes/pipes.module';
import {ScrollableDirective} from "@persoinfo/directive/scrollable/scrollable.directive";
import {NavigationModule} from "app/main/apps/navigation/navigation.module";
import {ServicesModule} from "@persoinfo/services/services.module";

@NgModule({
    imports  : [
        ServicesModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PersoInfoPipesModule,
        NavigationModule
    ],
    declarations:[
        ScrollableDirective
    ],
    exports  : [
        ServicesModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PersoInfoPipesModule,
        ScrollableDirective,
        NavigationModule
    ]
})
export class PersoInfoSharedModule
{
}
