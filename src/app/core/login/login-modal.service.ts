import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "app/main/login/login.component";


@Injectable({providedIn: 'root'})
export class LoginModalService {
    private isOpen = false;

    constructor(private modalService: NgbModal) {
    }

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        return this.modalService.open(LoginComponent);
    }
}
