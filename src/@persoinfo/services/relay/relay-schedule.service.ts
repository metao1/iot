import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "@persoinfo/services/crud.service";
import {RelayScheduleJob} from "@persoinfo/model/rpicomponent/relay-schedule-job.model";
import { Observable } from 'rxjs';

@Injectable()
export class RelayScheduleService extends CrudService<RelayScheduleJob, number> {

    constructor(http: HttpClient) {
        super("/schedule/fixed", http, null);
    }

    public toggle(id: number, enabled: boolean): Observable<RelayScheduleJob> {
        /*return this.http.put(this.base + '/' + id + '/toggle?enabled=' + enabled, {}, this.options)
            .map(this.extractData)
            .catch(this.handleError);*/
        return undefined;
    }

}
