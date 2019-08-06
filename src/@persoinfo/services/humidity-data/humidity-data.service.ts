import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from "@angular/common/http";
import {Page} from "@persoinfo/model/paging/page.model";
import {HumidityData} from "@persoinfo/model/humidity-data/humidity-data.model";
import {CrudDataService} from "@persoinfo/services/crud-data.service";

@Injectable()
export class HumidityDataService extends CrudDataService<Page<HumidityData>, number> {

    constructor(http: HttpClient) {
        super("/component/", "/humidity/", http, null);
    }
}
