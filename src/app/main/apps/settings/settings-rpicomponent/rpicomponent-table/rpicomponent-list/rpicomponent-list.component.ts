import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

import {SettingsRPiComponentService} from '@persoinfo/services/rpi-settings/settings-rpicomponent.service';
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";

@Component({
  selector: '[app-rpicomponent-list]',
  templateUrl: './rpicomponent-list.component.html',
  styleUrls: ['./rpicomponent-list.component.css']
})
export class RPiComponentListComponent implements OnInit {

  @Input()
  type: RPiComponentType;

  @Input()
  components: Array<any>;

  @Output()
  onHover: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  constructor(
    private router: Router,
    private settingsRPiComponentService: SettingsRPiComponentService
  ) { }

  ngOnInit() {}

  hover(component: RPiComponent) {
    this.settingsRPiComponentService.setSelectedComponent(component);
  }

  edit(id: number) {
    this.router.navigate(['/settings/component/', id]);
  }

}
