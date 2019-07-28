import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService, StateStorageService} from "@persoinfo/services/authentication";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    redirect: string;
    loginForm: FormGroup;
    errorShown: boolean;
    errorMessage: string;
    authenticationError: boolean;

    constructor(
        public formBuilder: FormBuilder,
        public loginService: LoginService,
        private stateStorageService: StateStorageService,
        public router: Router,
        public route: ActivatedRoute
    ) {
        this.loginForm = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.errorShown = false;
    }

    ngOnInit() {
        this.loginService.logout();
        this.redirect = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    submit(value: any) {
        this.loginService
            .login({
                username: this.loginForm.get('username').value,
                password: this.loginForm.get('password').value
            })
            .then(() => {
                this.authenticationError = false;
                if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
                    this.router.navigate(['/loginService/register']);
                }

                /* this.eventManager.broadcast({
                     name: 'authenticationSuccess',
                     content: 'Sending Authentication Success'
                 });*/

                // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // since login is successful, go to stored previousState and clear previousState
                const redirect = this.stateStorageService.getUrl();
                if (redirect) {
                    this.stateStorageService.storeUrl(null);
                    this.router.navigateByUrl(redirect);
                } else {
                    this.stateStorageService.storeUrl(null);
                    this.router.navigate(['/dashboard']);
                }
            })
            .catch(() => {
                this.authenticationError = true;
            });
    }

}
