import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SimpleRelayConfiguration} from "@persoinfo/model/dashboard/configuration/widget/control/simple-relay/simple-relay.configuration";
import {RelayState} from "@persoinfo/model/rpicomponent/relay/relay-state.enum";
import {RelayDTO} from "@persoinfo/model/rpicomponent/relay/relaydto.model";
import {SseService} from "@persoinfo/services/sse/sse.service";
import {RelayService} from "@persoinfo/services/relay/relay.service";

@Component({
    selector: 'app-simple-relay',
    templateUrl: './simple-relay.component.html',
    styleUrls: ['./simple-relay.component.css']
})
export class SimpleRelayComponent implements OnInit, OnDestroy {

    @Input()
    configuration: SimpleRelayConfiguration;

    private subscription;
    private relayState = RelayState;

    constructor(
        private sseService: SseService,
        private relayService: RelayService
    ) {
    }

    ngOnInit() {
        this.subscription = this.sseService.relay
            .subscribe(relay => {
                    console.log('relays:' + JSON.stringify(relay));
                    //this.handleRelayEvents(relay)
                }
            );
        this.relayService.poll(this.configuration.relay);
    }

    toggle(relay: RelayDTO) {
        if (relay.state === RelayState.ON)
            relay.state = RelayState.OFF;
        else if (relay.state === RelayState.OFF)
            relay.state = RelayState.ON;
        //this.relayService.toggle(relaySubsc);
    }

    private handleRelayEvents(relay) {
        // possible pass in relaySubsc DTO object (need to fix sse service)
        // or create RelayDTO
        // check if relaySubsc id is = configuration.relaySubsc.component.id
        // if it is set configuration.relaySubsc.state = relaySubsc.state
        if (this.configuration.relay.component.id === relay.component.id)
            this.configuration.relay.state = relay.state;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
