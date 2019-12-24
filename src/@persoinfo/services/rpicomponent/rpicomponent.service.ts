import {Injectable} from '@angular/core';

import {CrudService} from '@persoinfo/services/crud.service';
import {HttpClient} from "@angular/common/http";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {RelayDTO} from "@persoinfo/model/rpicomponent/relay/relaydto.model";
import { Observable } from 'rxjs';

@Injectable()
export class RPiComponentService extends CrudService<RPiComponent, number> {

    public components: RPiComponent[];

    constructor(http: HttpClient) {
        super('/component', http, null);
    }

    findAllByType(type: RPiComponentType): Promise<RPiComponent[]> {
        let url = this.base + '/byType?type=' + RPiComponentType[type];
        console.log('get components:', url);
        return new Promise(((resolve, reject) => {
            this.http.get<any>(url)
                .subscribe(
                    data => {
                        resolve(data)
                    },
                    error => reject(this.handleError(error)));
        }));
    }

    findAllRelays(): Observable<RelayDTO[]> {
        /*return this.http.get(this.base + '/byType?type=' + RPiComponentType[RPiComponentType.RELAY], this.options)
            .map(res => {
                let json = res.json();
                let temp: RelayDTO[] = json.map(e => new RelayDTO(e, null));
                return temp;
            })
            .catch(this.handleError);*/
        return undefined;
    }

}
