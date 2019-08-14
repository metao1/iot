import {Component, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {RPiComponentFormComponent} from "app/main/apps/settings/settings-rpicomponent/rpicomponent-form/rpicomponent-form.component";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";

@Component({
    selector: 'app-rpicomponent-add',
    templateUrl: './rpicomponent-add.component.html',
    styleUrls: ['./rpicomponent-add.component.css']
})
export class RPiComponentAddComponent implements OnInit {

    @ViewChild(RPiComponentFormComponent) child: RPiComponentFormComponent;

    form: FormGroup;

    formSettings: Object = {
        submitLabel: 'Create',
        isClearable: true
    };

    constructor(
        private rPiComponentService: RPiComponentService,
        private toasterService: ToasterService, private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            ip: ['', [
                Validators.required,
                Validators.pattern("^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$")
            ]],
            pin: ['', [
                Validators.required,
                Validators.pattern("^([1-9]{1})([0-9]{0,3})$")
            ]],
            type: ['', Validators.required]
        });
    };

    ngOnInit() {
        console.log('this is two');
    }

    submit(component: RPiComponent) {
        console.log(component);
        this.rPiComponentService.save(component)
            .then(data => {
                    this.toasterService.toast("Component successfully added", ToastType.SUCCESS);
                }
            ).catch(error => this.toasterService.toast("Error adding new component", ToastType.WARNING));
    }

}
