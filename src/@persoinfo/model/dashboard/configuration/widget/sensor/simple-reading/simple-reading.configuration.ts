import {RPiComponent} from '@persoinfo/model/rpicomponent/rpicomponent.model';
import {SensorReadingType} from '@persoinfo/model/dashboard/configuration/shared/sensor-reading-type.enum';
import {SimpleReadingColor} from '@persoinfo/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading-color.enum';

export class SimpleReadingConfiguration {

    type: SensorReadingType;
    component: RPiComponent;
    size: string[];
    color: SimpleReadingColor;

    constructor(component: RPiComponent, type: SensorReadingType, color: SimpleReadingColor) {
        this.component = component;
        this.type = type;
        this.color = color;
    }

    parseData(rPiComponent: RPiComponent): void {
        switch (rPiComponent.type.toString()) {
            case 'humidity':
                this.color = SimpleReadingColor.GREEN;
                this.type = SensorReadingType.HUMIDITY;
                this.component = rPiComponent;
                break;
            case 'temperature':
                this.color = SimpleReadingColor.RED;
                this.type = SensorReadingType.TEMPERATURE;
                this.component = rPiComponent;
                break;
            case 'moisture':
                this.type = SensorReadingType.MOISTURE;
                this.color = SimpleReadingColor.BLUE;
                this.component = rPiComponent;
                break;
        }
    }
}
