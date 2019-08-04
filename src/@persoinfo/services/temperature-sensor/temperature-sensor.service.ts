import {Injectable} from '@angular/core';
import {CrudService} from "@persoinfo/services/crud.service";
import {HttpClient} from "@angular/common/http";
import {TemperatureSensor} from "@persoinfo/model/rpicomponent/temperature-sensor/temperature-sensor.model";

@Injectable()
export class TemperatureSensorService extends CrudService<TemperatureSensor, number> {

    private routeParams: any;

    constructor(http: HttpClient) {
        super("/component/temperature", http, null)
    }
}
