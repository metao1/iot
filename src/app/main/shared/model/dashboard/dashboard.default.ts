import {Column} from 'app/main//shared/model/dashboard/configuration/column/column.model';
import {ColumnConfiguration} from 'app/main//shared/model/dashboard/configuration/column/column.configuration';
import {ControlWidget} from 'app/main//shared/model/dashboard/configuration/widget/control/control-widget.model';
import {ControlWidgetType} from 'app/main//shared/model/dashboard/configuration/widget/control/control-widget-type.enum';
import {Dashboard} from 'app/main//shared/model/dashboard/dashboard.model';
import {DesktopWidth} from 'app/main//shared/model/dashboard/configuration/column/desktop-width.enum';
import {LayoutPresets} from 'app/main//shared/model/dashboard/configuration/layout/layout-presets';
import {PhoneWidth} from 'app/main//shared/model/dashboard/configuration/column/phone-width.enum';
import {ReadingsListConfiguration} from 'app/main//shared/model/dashboard/configuration/widget/sensor/readings-list/readings-list.configuration';
import {RelayListConfiguration} from 'app/main//shared/model/dashboard/configuration/widget/control/relay-list/relay-list.configuration';
import {Row} from 'app/main//shared/model/dashboard/configuration/row/row.model';
import {RowConfiguration} from 'app/main//shared/model/dashboard/configuration/row/row.configuration';
import {SensorWidget} from 'app/main//shared/model/dashboard/configuration/widget/sensor/sensor-widget.model';
import {SensorWidgetType} from 'app/main//shared/model/dashboard/configuration/widget/sensor/sensor-widget-type.enum';
import {TabletWidth} from 'app/main//shared/model/dashboard/configuration/column/tablet-width.enum';

const dashboard = new Dashboard("Default Dashboard", LayoutPresets.fixedLeftPanelLayout);

function generateLeftPanel(dashboard) {
  let row1: Row = new Row(new RowConfiguration());
  let row2: Row = new Row(new RowConfiguration());
  generateReadingsList(row1);
  generateRelayList(row2);
  dashboard.layout.panels[0].configuration.rows.push(row1);
  dashboard.layout.panels[0].configuration.rows.push(row2);
}

function generateCenterPanel(dashboard) {
  let row1: Row = new Row(new RowConfiguration());
  generateGraphTable(row1);
  dashboard.layout.panels[1].configuration.rows.push(row1);
}

function generateReadingsList(row: Row) {
  let col: Column = new Column(
    new ColumnConfiguration(
      [PhoneWidth.COLUMN_12, TabletWidth.COLUMN_12, DesktopWidth.COLUMN_12]
    )
  );
  col.configuration.widgets.push(
    new SensorWidget(
      SensorWidgetType.READINGS_LIST, new ReadingsListConfiguration()
    )
  );
  row.configuration.columns.push(col);
}

function generateRelayList(row: Row) {
  let col: Column = new Column(
    new ColumnConfiguration(
      [PhoneWidth.COLUMN_12, TabletWidth.COLUMN_12, DesktopWidth.COLUMN_12]
    )
  );
  col.configuration.widgets.push(
    new ControlWidget(
      ControlWidgetType.RELAY_LIST, new RelayListConfiguration()
    )
  );
  row.configuration.columns.push(col);

}

function generateGraphTable(row: Row) {
  let col: Column = new Column(
    new ColumnConfiguration(
      [PhoneWidth.COLUMN_12, TabletWidth.COLUMN_12, DesktopWidth.COLUMN_12]
    )
  );
}

generateLeftPanel(dashboard);
generateCenterPanel(dashboard);

export const DASHBOARD_DEFAULT: Dashboard = dashboard;
