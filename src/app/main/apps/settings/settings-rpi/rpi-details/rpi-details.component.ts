import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SystemState} from "@persoinfo/model/rpi/system-state.enum";
import {RPi} from "@persoinfo/model/rpi/rpi.model";
import {RPiService} from "@persoinfo/services/rpi/rpi.service";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";

@Component({
    selector: 'app-rpi-details',
    templateUrl: './rpi-details.component.html',
    styleUrls: ['./rpi-details.component.css']
})
export class RPiDetailsComponent implements OnInit, OnDestroy {

    private id: number;
    private subscription: any;
    private hasImageUploadShown: boolean = false;

    systemState = SystemState;
    baseImageUrl = "BASE_IMAGE_URL";
    rpi: RPi;
    component: RPiComponent;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private rPiComponentService: RPiComponentService,
        private rpiService: RPiService
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.retrieveRPiDetails(this.id);
                this.getComponents();
            }
        );
    }

    showImageUploadButton(isShown: boolean) {
        this.hasImageUploadShown = isShown;
    }

    private retrieveRPiDetails(id: number) {
        this.rpiService.findOne(id)
            .then(data => {
                    this.rpi = data;
                },
                () => {
                    if (!this.rpi)
                        this.router.navigate(['/settings/rpi']);
                }
            ).catch(error => {
            console.log("error get details:" + error);
            this.router.navigate(['/settings/rpi']);
        });
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    private getComponents() {
        this.rPiComponentService
            .findAll()
            .then((data) => {
                this.component = data;
            });
    }
}
