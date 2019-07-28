import {Injectable} from '@angular/core';
import {CrudService} from "@persoinfo/services/crud.service";
import {HumiditySensor} from "@persoinfo/model/rpicomponent/humidity-sensor/humidity-sensor.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HumiditySensorService extends CrudService<HumiditySensor, number> {

    private routeParams: any;

    constructor(http: HttpClient) {
        super("/component/humidity", http, null)
    }
}
