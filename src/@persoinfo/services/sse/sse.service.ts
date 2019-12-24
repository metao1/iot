import {Injectable, OnDestroy} from '@angular/core';
import {SERVER_API_URL} from "app/app.constants";
import { BehaviorSubject } from 'rxjs';

declare let EventSource: any;

@Injectable()
export class SseService implements OnDestroy {

    public relay = new BehaviorSubject<Object>(null);
    public humidity = new BehaviorSubject<Object>(null);
    public moisture = new BehaviorSubject<Object>(null);
    public temperature = new BehaviorSubject<Object>(null);
    public proximity = new BehaviorSubject<Object>(null);
    public notification = new BehaviorSubject<Object>(null);

    private events;

    constructor() {
        this.humidity = new BehaviorSubject([]);
        this.moisture = new BehaviorSubject([]);
        this.relay = new BehaviorSubject([]);
        this.temperature = new BehaviorSubject([]);
        this.events = new EventSource(SERVER_API_URL + '/event', {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        this.events.addEventListener('message', message => {
            let json = JSON.parse(message.data);
            //console.log('message is ' + json.event);
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
