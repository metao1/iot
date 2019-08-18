import {Widget} from '@persoinfo/model/dashboard/configuration/widget/widget.model';
import {WidgetType} from '@persoinfo/model/dashboard/configuration/widget/widget-type.enum';
import {SensorWidgetType} from '@persoinfo/model/dashboard/configuration/widget/sensor/sensor-widget-type.enum';
import {SimpleReadingColor} from "./simple-reading/simple-reading-color.enum";
import {SensorReadingType} from "@persoinfo/model/dashboard/configuration/shared/sensor-reading-type.enum";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";

export class SensorWidget extends Widget {

    constructor(
        public type: SensorWidgetType,
        public color: SimpleReadingColor,
        public sensorReadingType: SensorReadingType,
        public sensorRpiComponent: RPiComponent//,
        //public configuration: SensorWidgetConfiguration
    ) {
        super(WidgetType.SENSOR);
    }

}
