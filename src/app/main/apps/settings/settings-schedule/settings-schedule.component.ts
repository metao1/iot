import {Component, OnInit, ViewChild} from '@angular/core';

import {PageLoading} from "@persoinfo/components/page-loader/page-loading";
import {RelayScheduleJob} from "@persoinfo/model/rpicomponent/relay-schedule-job.model";
import {RelayScheduleFormComponent} from "./relay-schedule-form/relay-schedule-form.component";
import {RelayScheduleService} from "@persoinfo/services/relay/relay-schedule.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";

@Component({
    selector: 'app-settings-schedule',
    templateUrl: './settings-schedule.component.html',
    styleUrls: ['./settings-schedule.component.css']
})
export class SettingsScheduleComponent extends PageLoading implements OnInit {

    @ViewChild(RelayScheduleFormComponent) child: RelayScheduleFormComponent;

    schedules: Array<RelayScheduleJob>;
    scheduleType: string = "FIXED";

    constructor(
        private relayScheduleService: RelayScheduleService,
        private toasterService: ToasterService
    ) {
        super(true);
    }

    ngOnInit() {
        this.relayScheduleService.findAll()
            .then(
                data => this.schedules = data
            ).catch(error => {
            this.toasterService.toast("Error retrieving relaySubsc schedules", ToastType.WARNING);
            this.ready();
        });
    }

    saveSchedule(schedule: RelayScheduleJob) {
        this.relayScheduleService.save(schedule)
            .then(
                data => {
                    this.schedules.push(data)
                    this.toasterService.toast("Schedule successfully saved", ToastType.SUCCESS);
                    this.resetForm();
                }
            ).then(error => this.toasterService.toast("Error saving schedule ", ToastType.WARNING));
    }

    updateSchedule(schedule: RelayScheduleJob) {
        this.toasterService.toast("Updating schedule " + schedule.id, ToastType.INFO);
    }

    editSchedule(id: number) {
        this.toasterService.toast("Editing schedule " + id, ToastType.INFO);
    }

    deleteSchedule(id: number) {
        this.relayScheduleService.delete(id)
            .then(
                data => {
                    this.removeSchedule(data);
                    this.toasterService.toast("Schedule successfully deleted", ToastType.SUCCESS);
                }
            ).then(error => this.toasterService.toast("Error deleting relay schedule: " + error));
    }

    toggleSchedule(schedule: RelayScheduleJob) {
        this.relayScheduleService.toggle(schedule.id, !schedule.enabled)
            .subscribe(
                data => schedule.enabled = !schedule.enabled,
                error => this.toasterService.toast("Error toggling schedule", ToastType.WARNING)
            );
    }

    private removeSchedule(schedule: RelayScheduleJob) {
        const temp: RelayScheduleJob = this.schedules.find(x => x.id === schedule.id);
        const index: number = this.schedules.indexOf(temp);
        this.schedules.splice(index, 1);
    }

    resetForm() {
        this.child.reset();
    }

}
