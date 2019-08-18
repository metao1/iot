import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Page} from '@persoinfo/model/paging/page.model';
import {HttpClient} from "@angular/common/http";
import {CrudDataService} from "@persoinfo/services/crud-data.service";
import {MoistureData} from "@persoinfo/model/moisture-data/humidity-data.model";

@Injectable()
export class MoistureDataService extends CrudDataService<Page<MoistureData>, number> {

    constructor(http: HttpClient) {
        super("/component/", "/moisture/", http, null);
    }
}
