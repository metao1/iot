import {RPiPin} from '../rpipin/rpi-pin.model';
import {RPi} from "../rpi/rpi.model";
import {RPiComponentSensorPreferences} from "./rpicomponent-sensor.preferences";

export abstract class RelayComponentModelComponent {

    public current: number = 0;

    constructor(
        public id: number,
        public alias: string,
        public pins: Array<RPiPin>,
        public rpi: RPi,
        public preferences : RPiComponentSensorPreferences
    ) {
    }

}
