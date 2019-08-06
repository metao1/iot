import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "@persoinfo/services/crud.service";
import {RelayScheduleJob} from "@persoinfo/model/rpicomponent/relay-schedule-job.model";

@Injectable()
export class RelayScheduleService extends CrudService<RelayScheduleJob, number> {

    constructor(http: HttpClient) {
        super("component/relaySubsc/schedule", http, null);
    }

    public toggle(id: number, enabled: boolean): Observable<RelayScheduleJob> {
        /*return this.http.put(this.base + '/' + id + '/toggle?enabled=' + enabled, {}, this.options)
            .map(this.extractData)
            .catch(this.handleError);*/
        return undefined;
    }

}
