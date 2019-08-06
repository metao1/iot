import {RelayState} from './relay-state.enum';
import {RelayComponentModelComponent} from "@persoinfo/model/rpicomponent/relaycomponent.model";

export class RelayDTO {
    constructor(
        public component: RelayComponentModelComponent,
        public state: RelayState
    ) {
    }
}
