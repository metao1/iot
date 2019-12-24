import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {CrudService} from "@persoinfo/services/crud.service";
import {Relay} from "@persoinfo/model/rpicomponent/relay/relay.model";
import {RelayDTO} from "@persoinfo/model/rpicomponent/relay/relaydto.model";

@Injectable()
export class RelayService extends CrudService<Relay, number> {

    constructor(http: HttpClient) {
        super('/component/relay', http, null)
    }

    public toggle(relay: RelayDTO): void {
        let url: string = this.base + "/" + relay.component.id + '/?state=' + relay.state;
        console.log("inside toggle relay : url -> " + url);
        this.http.put(url, '')
            .subscribe(response => console.log("success"),
                    error => console.log("error toggling relay"));
    }

    public poll(relay: RelayDTO): void {
        let url: string = this.base + "/" + relay.component.id + "/poll";
        this.http.get(url)
            .subscribe(response => /*console.log("success")*/
                error => console.log("error polling relay"));
    }

}
