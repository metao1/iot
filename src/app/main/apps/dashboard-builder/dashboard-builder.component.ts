import {Component, OnInit} from '@angular/core';
import {PageLoading} from "@persoinfo/components/page-loader/page-loading";
import {PanelType} from "@persoinfo/model/dashboard/configuration/panel/panel-type.enum";
import {Layout} from "@persoinfo/model/dashboard/configuration/layout/layout.model";

@Component({
  selector: 'app-dashboard-builder',
  templateUrl: './dashboard-builder.component.html',
  styleUrls: ['./dashboard-builder.component.css']
})
export class DashboardBuilderComponent extends PageLoading implements OnInit {

  private panelType = PanelType;
  private layout: Layout;

  constructor() {
    super(true);
  }

  ngOnInit() {
    this.standby();
    setTimeout(() => this.ready(), 1000);
  }

  onAddComponent(component: string) {
    console.log("builder: adding component : " + component);
  }

  onChangeLayoutPreset(layout: Layout) {
    this.layout = layout;
  }

}
