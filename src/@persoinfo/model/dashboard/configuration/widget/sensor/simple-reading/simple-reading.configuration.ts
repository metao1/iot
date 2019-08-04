import {RPiComponent} from '@persoinfo/model/rpicomponent/rpicomponent.model';
import {SensorReadingType} from '../../../shared/sensor-reading-type.enum';
import {SimpleReadingColor} from './simple-reading-color.enum';
import {HumiditySensor} from "@persoinfo/model/rpicomponent/humidity-sensor/humidity-sensor.model";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {HumiditySensorPreferences} from "@persoinfo/model/rpicomponent/humidity-sensor/humidity-sensor.preferences";
import {TemperatureSensor} from "@persoinfo/model/rpicomponent/temperature-sensor/temperature-sensor.model";
import {MoistureSensor} from "@persoinfo/model/rpicomponent/moisture-sensor/moisture-sensor.model";
import {MoistureSensorPreferences} from "@persoinfo/model/rpicomponent/moisture-sensor/moisture-sensor.preferences";
import {TemperatureSensorPreferences} from "@persoinfo/model/rpicomponent/temperature-sensor/temperature-sensor.preferences";

export class SimpleReadingConfiguration {

  type: SensorReadingType;
  component: RPiComponent;
  size: string[];
  color: SimpleReadingColor;

  /*constructor(component: RPiComponent) {
    this.component = component;
    this.size = [];
    this.color = SimpleReadingColor.GREEN;
  }*/

  constructor(componentType: String) {
    switch (componentType) {
      case 'humidity':
        this.color = SimpleReadingColor.GREEN;
        this.type = SensorReadingType.HUMIDITY;
        this.component = new HumiditySensor(1, 'humidity', null, RPiComponentType.HUMIDITY,
          new HumiditySensorPreferences(1, 0, 100, true, true));
        break;
      case 'temperature':
        this.color = SimpleReadingColor.RED;
        this.type = SensorReadingType.TEMPERATURE;
        this.component = new TemperatureSensor(3, 'temperature', null, RPiComponentType.TEMPERATURE,
          new TemperatureSensorPreferences(3, 0, 100, true, true));
        break;
      case 'moisture':
        this.type = SensorReadingType.MOISTURE;
        this.color = SimpleReadingColor.BLUE;
        this.component = new MoistureSensor(2, 'moisture', null, RPiComponentType.MOISTURE,
          new MoistureSensorPreferences(2, 0, 100, true, true));
        break;
    }
    this.size = [];
  }
}
