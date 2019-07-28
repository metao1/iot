import {Widget} from 'app/main/shared/model/dashboard/configuration/widget/widget.model';
import {WidgetType} from 'app/main/shared/model/dashboard/configuration/widget/widget-type.enum';
import {SensorWidgetType} from 'app/main/shared/model/dashboard/configuration/widget/sensor/sensor-widget-type.enum';
import {SensorWidgetConfiguration} from 'app/main/shared/model/dashboard/configuration/widget/sensor/sensor-widget.configuration';

export class SensorWidget extends Widget {

  constructor(
    public type: SensorWidgetType,
    public configuration: SensorWidgetConfiguration
  ) {
    super(WidgetType.SENSOR);
  }

}
