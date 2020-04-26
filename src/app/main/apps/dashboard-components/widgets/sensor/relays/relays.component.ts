import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RelayDTO} from "@persoinfo/model/rpicomponent/relay/relaydto.model";
import {RelayState} from "@persoinfo/model/rpicomponent/relay/relay-state.enum";
import {RelayService} from "@persoinfo/services/relay/relay.service";
import {SseService} from "@persoinfo/services/sse/sse.service";

@Component({
    selector: 'app-relays',
    templateUrl: './relays.component.html',
    styleUrls: ['./relays.component.css']
})
export class RelaysComponent implements OnInit, OnDestroy {

    @Input("relays") relays: Array<RelayDTO>;
    private relayState = RelayState;
    private _unsubscribeAll;

    constructor(
        private relayService: RelayService,
        private sseService: SseService
    ) {}

    ngOnInit() {
        this.relayService.findAll()
            .then(data => {
                data.forEach((e) => this.relays.push(new RelayDTO(e, RelayState.DISABLED)));
                this.relays.forEach(e => this.relayService.poll(e));
                this._unsubscribeAll = this.sseService.relay
                    .subscribe((relay: RelayDTO) => {
                            if (typeof (relay) != 'undefined' && relay != null && relay.component != null) {
                                this.handleRelayEvent(relay);
                            }
                        }
                    );
            }).catch(error => console.log("error getting relays" + error));// replace with toast message
    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggle(relay: RelayDTO) {
        if (relay.state === RelayState.ON)
            relay.state = RelayState.OFF;
        else if (relay.state === RelayState.OFF)
            relay.state = RelayState.ON;
        this.relayService.toggle(relay);
    }

    private handleRelayEvent(relay: any) {
        let obj = this.relays.find(e => e.component.id === relay.component.id);
        //console.log(JSON.stringify(relay) + ':' + obj);
        obj.state = relay.state;
    }

}
