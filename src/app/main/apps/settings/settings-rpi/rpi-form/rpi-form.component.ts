import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RPiService} from "@persoinfo/services/rpi/rpi.service";

@Component({
    selector: 'app-rpi-form',
    templateUrl: './rpi-form.component.html',
    styleUrls: ['./rpi-form.component.css']
})
export class RPiFormComponent {

    form: FormGroup;

    constructor(private router: Router, private rpiService: RPiService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            ip: ['127.0.0.1', [
                Validators.required,
                Validators.pattern("^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$")
            ]],
            port: ['1883', [
                Validators.required,
                Validators.pattern("^([0-9]{0,5})$")
            ]],
            description: ['', [
                Validators.required
            ]],
            pin: ['', [
                Validators.required,
                Validators.pattern("^([1-9]{1})([0-9]{0,3})$")
            ]],
            mqttUsername: ['', [
                Validators.required
            ]],
            mqttPassword: ['', [
                Validators.required
            ]],
            type: ['', Validators.required]
        });
    }

    submit() {
        this.rpiService.save(this.form.getRawValue())
            .then(data => this.router.navigate(['/settings/rpi/', data.id]),
            ).catch(error => console.log("error saving raspberry pi"));
    }

}
