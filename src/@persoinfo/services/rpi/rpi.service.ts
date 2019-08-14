import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {CrudService} from "@persoinfo/services/crud.service";
import {RPi} from "@persoinfo/model/rpi/rpi.model";

@Injectable()
export class RPiService extends CrudService<RPi, number> {

    constructor(http: HttpClient) {
        super("/rpi", http, null);
    }

}
