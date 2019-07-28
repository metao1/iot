import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LayoutPresets} from "@persoinfo/model/dashboard/configuration/layout/layout-presets";

@Component({
  selector: 'app-dashboard-builder-toolbar',
  templateUrl: './dashboard-builder-toolbar.component.html',
  styleUrls: ['./dashboard-builder-toolbar.component.css']
})
export class DashboardBuilderToolbarComponent implements OnInit {

  private layouts = LayoutPresets;

  @Input()
  currentLayout: Object;

  @Output()
  onAddComponent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onChangeLayoutPreset: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  addComponent(component: string) {
    console.log("toolbar: adding component : " + component);
    this.onAddComponent.emit(component);
  }

  changeLayoutPreset(layout: Object) {
    this.onChangeLayoutPreset.emit(layout);
  }

}
