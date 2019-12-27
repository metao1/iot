import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthServerProvider} from "@persoinfo/services/authentication";
import {Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    animations: [
        trigger('signal', [
            state('void', style({
                'transform': 'translateY(-100%)',
                'opacity': '0'
            })),
            transition('* => *', animate(300))
        ])
    ]
})
export class NavigationComponent implements OnInit {

    constructor(
        public auth: AuthServerProvider,
        public router: Router
    ) {}

    logout() {
        this.auth.logout();
    }

    @Input() isShown : boolean;

    goSetting() {
        this.router.navigate(['settings/component']).catch(err => console.log('error log out:' + err.toString()));
    }

    goScheduling() {
        this.router.navigate(['scheduling']).catch(err => console.log('error log out:' + err.toString()));
    }

    goDashboard() {
        this.router.navigate(['dashboard']).catch(err => console.log('error log out:' + err.toString()));
    }

    ngOnInit(): void {
    }
}
