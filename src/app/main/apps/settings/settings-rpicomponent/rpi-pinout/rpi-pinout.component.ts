import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {SettingsRPiComponentService} from '@persoinfo/services/rpi-settings/settings-rpicomponent.service';
import {RPiPin} from "@persoinfo/model/rpipin/rpi-pin.model";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";

@Component({
  selector: 'app-rpi-pinout',
  templateUrl: './rpi-pinout.component.html',
  styleUrls: ['./rpi-pinout.component.css']
})
export class RPiPinoutComponent implements OnInit, OnDestroy {

  selected: RPiComponent;
  private selectedSubscription;

  @Input()
  pins: Array<RPiPin>;

  constructor(
    private settingsRPiComponentService: SettingsRPiComponentService
  ) { }

  ngOnInit() {
    this.selectedSubscription = this.settingsRPiComponentService.selectedComponent
      .subscribe(
        data => this.selected = data,
        error => console.log("error subscribing to selected component")
      );
  }

  ngOnDestroy() {
    this.selectedSubscription.unsubscribe();
  }

}
