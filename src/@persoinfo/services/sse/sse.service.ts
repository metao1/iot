import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {SERVER_API_URL} from "app/app.constants";

declare let EventSource: any;

@Injectable()
export class SseService implements OnDestroy {

    private relay = new Subject<Object>();
    public humidity :BehaviorSubject<any>;
    private temperature = new BehaviorSubject<Object>(null);
    private proximity = new BehaviorSubject<Object>(null);
    private moisture = new BehaviorSubject<Object>(null);
    private notification = new Subject<Object>();

    private events;

    constructor() {
        this.humidity = new BehaviorSubject([]);
        this.events = new EventSource(SERVER_API_URL + '/event', {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        this.events.addEventListener('message', message => {
            let json = JSON.parse(message.data);
            console.log('message is ' + json.event);
            console.log('payload is ' + JSON.stringify(json.payload));
            switch (json.event) {
                case 'temperature':
                    this.temperature.next(json.payload);
                    break;
                case 'humidity':
                    this.humidity.next(json.payload);
                    break;
                case 'relay':
                    this.relay.next(json.payload);
                    break;
                case 'proximity':
                    this.proximity.next(json.payload);
                    break;
                case 'moisture':
                    this.moisture.next(json.payload);
                    break;
                case 'notification':
                    this.notification.next(json.payload);
                    break;
                default:
                    break;
            }

        });

    }

    ngOnDestroy() {
        this.events.close();
    }

}
