import {RPiComponent} from '../rpicomponent.model';
import {RPiComponentType} from '../rpicomponent-type.enum';
import {RPiPin} from 'app/main/shared/model/rpipin/rpi-pin.model';
import {TemperatureSensorPreferences} from './temperature-sensor.preferences';

export class TemperatureSensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public type: RPiComponentType,
    public preferences: TemperatureSensorPreferences
  ) {
    super(id, alias, pins, type);
  }

}
