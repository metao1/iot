import {Component, OnInit} from '@angular/core';
import {PageLoading} from "@persoinfo/components/page-loader/page-loading";
import {RPiPin} from "@persoinfo/model/rpipin/rpi-pin.model";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {SettingsRPiComponentService} from "@persoinfo/services/rpi-settings/settings-rpicomponent.service";
import {RPiPinService} from "@persoinfo/services/rpipin/rpi-pin.service";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";

@Component({
    selector: 'app-settings-rpicomponent',
    templateUrl: './settings-rpicomponent.component.html',
    styleUrls: ['./settings-rpicomponent.component.css']
})
export class SettingsRPiComponentComponent extends PageLoading implements OnInit {

    pins: Array<RPiPin>;

    constructor(
        private rPiPinService: RPiPinService,
        private toasterService: ToasterService,
        private settingsRPiComponentService: SettingsRPiComponentService
    ) {
        super(true);
    }

    ngOnInit() {
        this.loadPins();
        this.ready();
    }


    private loadPins() {
        this.rPiPinService
            .findAll()
            .then(
                data => this.pins = data
            ).catch(error => this.toasterService.toast("Error retrieving pins", ToastType.WARNING));
    }

}
