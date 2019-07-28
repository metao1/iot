import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {PersoInfoPipesModule} from '@persoinfo/pipes/pipes.module';
import {ScrollableDirective} from "@persoinfo/directive/scrollable/scrollable.directive";

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PersoInfoPipesModule
    ],
    declarations:[
        ScrollableDirective
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PersoInfoPipesModule,
        ScrollableDirective
    ]
})
export class PersoInfoSharedModule
{
}
