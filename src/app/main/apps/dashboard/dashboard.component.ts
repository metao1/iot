import {Component, OnInit} from '@angular/core';
import {PageLoading} from "@persoinfo/components/page-loader/page-loading";
import {DASHBOARD_DEFAULT} from "@persoinfo/model/dashboard/dashboard.default";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageLoading implements OnInit {

    constructor() {
        super(true);
    }

    ngOnInit() {
        this.standby();
        setTimeout(() => this.ready(), 1000);
        console.log(DASHBOARD_DEFAULT);
    }
}
