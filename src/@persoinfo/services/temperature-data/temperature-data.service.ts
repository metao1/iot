import {Injectable} from '@angular/core';

import {TemperatureData} from '@persoinfo/model/temperature-data/temperature-data.model';
import {Page} from '@persoinfo/model/paging/page.model';
import {HttpClient} from "@angular/common/http";
import {CrudDataService} from "../crud-data.service";

@Injectable()
export class TemperatureDataService extends CrudDataService<Page<TemperatureData>, number> {

    constructor(http: HttpClient) {
        super("/component/", "/temperature/", http, null);
    }
}
