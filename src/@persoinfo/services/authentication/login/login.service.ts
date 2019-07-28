import {Injectable} from '@angular/core';

import {AccountService} from '@persoinfo/services/authentication/auth/account.service';
import {AuthServerProvider} from '@persoinfo/services/authentication/auth/auth-jwt.service';

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {
    }

    login(credentials, callback?) {
        const cb = callback || function () {
        };

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(
                data => {
                    this.accountService.identity(false).then(account => {
                        resolve(data);
                    });
                    return cb();
                },
                err => {
                    this.logout();
                    reject(err);
                    return cb(err);
                }
            );
        });
    }

    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.authServerProvider.logout().subscribe(null, null,
                () => this.accountService.authenticate(null));
            resolve();
        });
    };
}
