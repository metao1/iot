import {Component, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RPiComponentFormComponent} from "app/main/apps/settings/settings-rpicomponent/rpicomponent-form/rpicomponent-form.component";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";

@Component({
  selector: 'app-rpicomponent-add',
  templateUrl: './rpicomponent-add.component.html',
  styleUrls: ['./rpicomponent-add.component.css']
})
export class RPiComponentAddComponent implements OnInit {

  @ViewChild(RPiComponentFormComponent, { static: false }) child: RPiComponentFormComponent;

  form: FormGroup;

  constructor(
    private rPiComponentService: RPiComponentService,
    private toasterService: ToasterService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      ip: ['', [
        Validators.required
      ]],
      pin: ['', [
        Validators.required,
      ]],
      type: ['', Validators.required]
    });
  };

  ngOnInit() {
  }

  submit(component: RPiComponent) {
    console.log(component);
    this.rPiComponentService.save(component)
      .then(
        data => {
          this.resetForm();
          this.toasterService.toast('Component successfully added', ToastType.SUCCESS);
        }
      ).catch(error => this.toasterService.toast('Error adding new component', ToastType.WARNING));
  }

  private resetForm() {
    this.child.resetForm();
  }

}
