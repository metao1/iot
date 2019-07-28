import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersoInfoSharedModule } from '@persoinfo/shared.module';

import { ContentComponent } from '@persoinfo/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        PersoInfoSharedModule,
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule
{
}
