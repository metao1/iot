import {Injectable} from '@angular/core';

import {CrudService} from '@persoinfo/services/crud.service';
import {ProximitySensor} from '@persoinfo/model/rpicomponent/proximity-sensor/proximity-sensor.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProximitySensorService extends CrudService<ProximitySensor, number> {

    constructor(http: HttpClient) {
        super("component/proximity", http, null);
    }

}
