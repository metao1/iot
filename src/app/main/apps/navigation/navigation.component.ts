import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LoginService} from "@persoinfo/services/authentication";
import {Component, Input, OnInit} from '@angular/core';

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

    show: boolean;

    constructor(
        public auth: LoginService,
        public router: Router
    ) {
        this.show = true;
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['login']).catch(err => console.log('error log out:' + err.toString()));
    }

    isShown() {
        if (this.auth.isLoggedIn()) {
            this.show = true;
            return true;
        }
    }

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
