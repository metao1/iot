import {Injectable} from '@angular/core';
import {CrudService} from "@persoinfo/services/crud.service";
import {HttpClient} from "@angular/common/http";
import {MoistureSensor} from "@persoinfo/model/rpicomponent/moisture-sensor/moisture-sensor.model";

@Injectable()
export class MoistureSensorService extends CrudService<MoistureSensor, number> {

    private routeParams: any;

    constructor(http: HttpClient) {
        super("/component/moisture", http, null)
    }
}
