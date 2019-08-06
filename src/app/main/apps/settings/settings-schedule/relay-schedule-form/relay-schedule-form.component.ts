import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RelayScheduleJob} from "@persoinfo/model/rpicomponent/relay-schedule-job.model";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {RelayState} from "@persoinfo/model/rpicomponent/relay/relay-state.enum";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";

@Component({
  selector: 'app-relay-schedule-form',
  templateUrl: './relay-schedule-form.component.html',
  styleUrls: ['./relay-schedule-form.component.css']
})
export class RelayScheduleFormComponent implements OnInit {

  @Output()
  onFormSubmit: EventEmitter<RelayScheduleJob> = new EventEmitter<RelayScheduleJob>();

  @Input()
  submitLabel: string;

  form: FormGroup;
  components: Array<RPiComponent>;
  relayState = RelayState;

  constructor(
    private formBuilder: FormBuilder,
    private rPiComponentService: RPiComponentService,
    private toasterService: ToasterService
  ) {
    this.form = formBuilder.group({
      component: ['', Validators.required],
      state: ['', Validators.required],
      time: ['', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\:(0[0-9]|[1-5][0-9])\s([AaPp][Mm])$/g) //Pattern for time with AM PM (ex: 12:44 PM)
      ]],
      enabled: ['true', Validators.required]
    });
  }

  ngOnInit() {
    this.submitLabel = "Submit";
    this.rPiComponentService.findAllByType(RPiComponentType.RELAY)
      .then(
        data => this.components = data,
      ).catch(error => this.toasterService.toast("Error loading relay components", ToastType.WARNING));
  }

  submit(schedule: any) {
    let temp = new RelayScheduleJob(-1,
      schedule.component,
      schedule.state,
      schedule.enabled,
      this.parseTime(schedule.time)
    );
    this.onFormSubmit.emit(temp);
  }

  reset() {
    this.form.reset();
    this.form.controls['enabled'].setValue(true); //set enabled toggle to true (default);
  }

  private parseTime(time: string): number {
    let date: Date = new Date();
    const parts = time.split(/\s|[:]/); // time formated 01:00 PM (splits at : and space into parts);

    if(parts[0] < '12' && parts[2].toLowerCase() === 'pm')
      date.setHours(Number.parseInt(parts[0]) + 12, Number.parseInt(parts[1]), 0);
    else if(parts[0] === '12' && parts[2].toLowerCase() === 'am')
      date.setHours(Number.parseInt(parts[0]) + 12, Number.parseInt(parts[1]), 0);
    else
      date.setHours(Number.parseInt(parts[0]), Number.parseInt(parts[1]), 0);

    return date.getTime();
  }

}
