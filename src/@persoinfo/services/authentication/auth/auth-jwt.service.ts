import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable({providedIn: 'root'})
export class AuthServerProvider {
    constructor(private keycloakService: KeycloakService) {}

    getToken() : Observable<any>{
        return of(this.keycloakService.getToken());
    }

    isLoggedIn(): Observable<any>{
        return this.getToken(); 
    }

    logout(): Observable<any> {
        return of(this.keycloakService.logout());
    }
}
