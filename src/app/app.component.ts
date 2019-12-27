import {Component, OnInit} from '@angular/core';
import {ToasterLocation} from "@persoinfo/components/toaster/toaster-location.enum";
import { KeycloakService } from 'keycloak-angular';
import { of, BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(private readonly keycloakService: KeycloakService){}
    private _isShown: boolean; 
    
    isShown(): boolean {
        return this._isShown;
    }

    ngOnInit(){
        of(this.keycloakService.isLoggedIn())
        .subscribe(_=>{
            this._isShown  = _? true:false;
        });
    }
}
