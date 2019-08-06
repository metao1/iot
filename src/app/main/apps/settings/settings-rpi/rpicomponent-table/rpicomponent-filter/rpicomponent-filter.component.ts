import {Component, OnDestroy, OnInit} from '@angular/core';
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {SettingsRPiComponentService} from "@persoinfo/services/rpi-settings/settings-rpicomponent.service";

@Component({
  selector: 'app-rpicomponent-filter',
  templateUrl: './rpicomponent-filter.component.html',
  styleUrls: ['./rpicomponent-filter.component.css']
})
export class RPiComponentFilterComponent implements OnInit, OnDestroy {

  rPiComponentType = RPiComponentType;
  selected: RPiComponentType = RPiComponentType.ALL;

  filterSubscription

  constructor(
    private settingsRPiComponentService: SettingsRPiComponentService
  ) { }

  ngOnInit() {
    this.settingsRPiComponentService.componentFilter
      .subscribe(
        data => this.selected = data,
        error => console.log("error subscribing to filter in filter menu")
      )
    this.settingsRPiComponentService.setComponentFilter(RPiComponentType.ALL);
  }

  changeFilter(filter: RPiComponentType) {
    this.settingsRPiComponentService.setComponentFilter(filter);
  }

  ngOnDestroy() {
    if(this.filterSubscription)
      this.filterSubscription.unsubscribe();
  }

}
