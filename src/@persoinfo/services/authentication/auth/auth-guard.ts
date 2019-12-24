import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard implements CanActivateChild {
    constructor(protected router: Router, protected keycloakService: KeycloakService) {
        super(router, keycloakService);
    }

    isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            if (!this.authenticated) {
                this.keycloakAngular.login().catch(e => console.error(e));

                return reject(false);
            }

            console.log('role restriction given at app-routing.module for this route', route.data.roles);
            console.log('User roles coming after login from keycloak :', this.roles);

            const requiredRoles = route.data.roles;
            let granted = false;

            if (!requiredRoles || requiredRoles.length === 0) {
                granted = true;
            } else {
                for (const requiredRole of requiredRoles) {
                    if (this.roles.indexOf(requiredRole) > -1) {
                        granted = true;
                        break;
                    }
                }
            }

            if (!granted) {
                this.router.navigateByUrl('/login');
            }

            resolve(granted);
        });
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // TODO test if working as intended
        return super.canActivate(childRoute, state);
    }
}