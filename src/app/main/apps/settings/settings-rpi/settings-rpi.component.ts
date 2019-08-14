import {Component, OnInit} from '@angular/core';

import {RPi} from '@persoinfo/model/rpi/rpi.model';
import {ModalConfirm} from "@persoinfo/components/modal-confirm/modal-confirm.model";
import {RPiService} from "@persoinfo/services/rpi/rpi.service";

@Component({
    selector: 'app-settings-rpi',
    templateUrl: './settings-rpi.component.html',
    styleUrls: ['./settings-rpi.component.css']
})
export class SettingsRPiComponent implements OnInit {

    rpis: Array<RPi>;
    modalConfirm: ModalConfirm;
    deletionId: number;

    constructor(
        private rpiService: RPiService
    ) {
    }

    ngOnInit() {
        this.loadAllRPi();
        this.modalConfirm = new ModalConfirm("Are you sure you want to delete this node?", false);
    }

    onDelete(id: number) {
        this.deletionId = id;
        this.modalConfirm.toggle();
    }

    onConfirm(confirm: boolean) {
        if (confirm) {
            this.deleteById(this.deletionId);
            this.deletionId = null;
        } else {
            this.deletionId = null;
        }
    }

    private deleteById(id: number) {
        this.rpiService.delete(id)
            .then(
                data => this.loadAllRPi(),
            ).catch(error => console.log("error deleting rpi"));
    }

    private loadAllRPi() {
        this.rpiService.findAll()
            .then(
                data => this.rpis = data
            ).catch(error => console.log("error getting raspberry pies"));
    }

}
