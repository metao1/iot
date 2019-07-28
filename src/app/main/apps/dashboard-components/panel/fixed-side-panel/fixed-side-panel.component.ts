import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PanelLocation} from "@persoinfo/model/dashboard/configuration/panel/panel-location.enum";
import {PanelConfiguration} from "@persoinfo/model/dashboard/configuration/panel/panel.configuration";
import {RowConfiguration} from "@persoinfo/model/dashboard/configuration/row/row.configuration";
import {Row} from "@persoinfo/model/dashboard/configuration/row/row.model";

@Component({
  selector: 'app-fixed-side-panel',
  templateUrl: './fixed-side-panel.component.html',
  styleUrls: ['./fixed-side-panel.component.css']
})
export class FixedSidePanelComponent implements OnInit, OnDestroy {

  private panelLocation = PanelLocation;

  @Input()
  configuration: PanelConfiguration

  constructor() { }

  ngOnInit() {
    this.configuration.rows.push(new Row(new RowConfiguration()));
  }

  ngOnDestroy() {
    this.configuration.rows = new Array<Row>();
  }

}
