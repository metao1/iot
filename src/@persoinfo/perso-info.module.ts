import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule()
export class PersoInfoModule
{
    constructor(@Optional() @SkipSelf() parentModule: PersoInfoModule)
    {
        if ( parentModule )
        {
            throw new Error('PersoInfoSnackBarModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : PersoInfoModule
        };
    }
}
