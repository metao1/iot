import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PanelConfiguration} from "@persoinfo/model/dashboard/configuration/panel/panel.configuration";
import {RowConfiguration} from "@persoinfo/model/dashboard/configuration/row/row.configuration";
import {Row} from "@persoinfo/model/dashboard/configuration/row/row.model";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  @Input()
  configuration: PanelConfiguration;

  constructor() { }

  ngOnInit() {
    this.configuration.rows.push(new Row(new RowConfiguration()));
  }

  ngOnDestroy() {
    this.configuration.rows = new Array<Row>();
  }

}
