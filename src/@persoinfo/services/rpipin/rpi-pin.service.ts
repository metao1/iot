import {Injectable} from '@angular/core';
import {CrudService} from '../crud.service';
import {HttpClient} from "@angular/common/http";
import {RPiPin} from "@persoinfo/model/rpipin/rpi-pin.model";

@Injectable()
export class RPiPinService extends CrudService<RPiPin, number> {

    constructor(http: HttpClient) {
        super('rpipin', http, null);
    }

}
