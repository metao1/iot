import {Component, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {RPiComponentFormComponent} from "app/main/apps/settings/settings-rpicomponent/rpicomponent-form/rpicomponent-form.component";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";
import {ActivatedRoute} from "@angular/router";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {RPiPinDirection} from "../../../../../../@persoinfo/model/rpipin/rpi-pin-direction.enum";

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
    rPiComponentType = RPiComponentType;
    rPiPinDirection = RPiPinDirection;

    constructor(
        private route: ActivatedRoute,
        private rPiComponentService: RPiComponentService,
        private toasterService: ToasterService, private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            pin: formBuilder.group({
                number: ['', [
                    Validators.required,
                    Validators.pattern("^([1-9]{1})([0-9]{0,3})$")
                ]],
                direction: ['', [
                    Validators.required
                ]],
                description: ['', [
                    Validators.required
                ]]
            }),
            rpiId: ['', [
                Validators.required
            ]],
            alias: ['', [
                Validators.required
            ]],
            type: ['', Validators.required]
        });
    };

    ngOnInit() {
        this.form.get('rpiId').setValue(window.location.pathname.split('/')[3]);
    }

    submit() {
        this.rPiComponentService.save(this.form.getRawValue())
            .then(data => {
                    this.toasterService.toast("Component successfully added", ToastType.SUCCESS);
                }
            ).catch(error => this.toasterService.toast("Error adding new component", ToastType.WARNING));
    }

}
