import {Injectable} from '@angular/core';

import {CrudService} from '@persoinfo/services/crud.service';
import {HttpClient} from "@angular/common/http";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";

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
                    }, error => reject(this.handleError(error)));
        }));
    }

    // findAllRelays(): Promise<RelayDTO[]> {
    //     return new Promise(((resolve, reject) => {
    //         this.http.get(this.base + '/byType?type=' + RPiComponentType[RPiComponentType.RELAY], this.options)
    //             .map((res: Response) => res.json()))
    //             .subscribe(res => {
    //                 let temp: RelayDTO[] = res.map(e => new RelayDTO(e, null));
    //                 resolve(temp);
    //             }, error => reject(this.handleError(error)));
    //     }));
    // }

}
