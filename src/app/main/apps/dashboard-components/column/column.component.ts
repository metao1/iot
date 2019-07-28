import {Component, Input, OnInit} from '@angular/core';
import {ColumnConfiguration} from "@persoinfo/model/dashboard/configuration/column/column.configuration";
import {Widget} from "@persoinfo/model/dashboard/configuration/widget/widget.model";
import {Row} from "@persoinfo/model/dashboard/configuration/row/row.model";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input()
  configuration: ColumnConfiguration; // ColumnConfiguration (sizes)

  @Input()
  widget: Widget; // all components added to column change to list

  @Input()
  rows: Array<Row>; // all rows

  // if has rows can't add components;

  constructor() { }

  ngOnInit() {
    this.rows = Array<Row>();
  }

  addWidget(widget: Widget) {
    this.widget = widget;
  }

  addRow(row: Row) {
    if(this.widget)
      this.rows.push(row);
    else
      console.log("cannot add row column that contains a component");  // use toast message to notify error
  }

}
