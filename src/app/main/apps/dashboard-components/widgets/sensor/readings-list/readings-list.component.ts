import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HumiditySensor} from "@persoinfo/model/rpicomponent/humidity-sensor/humidity-sensor.model";
import {MoistureSensor} from "@persoinfo/model/rpicomponent/moisture-sensor/moisture-sensor.model";
import {ProximitySensor} from "@persoinfo/model/rpicomponent/proximity-sensor/proximity-sensor.model";
import {TemperatureSensor} from "@persoinfo/model/rpicomponent/temperature-sensor/temperature-sensor.model";
import {HumiditySensorService} from "@persoinfo/services/humidity-sensor/humidity-sensor.service";
import {MoistureSensorService} from "@persoinfo/services/moisture-sensor/moisture-sensor.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {SseService} from "@persoinfo/services/sse/sse.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";
import {TemperatureSensorService} from "@persoinfo/services/temperature-sensor/temperature-sensor.service";
import {ProximitySensorService} from "../../../../../../../@persoinfo/services/proximity-sensor/proximity-sensor.service";

@Component({
    selector: 'app-readings-list',
    templateUrl: './readings-list.component.html',
    styleUrls: ['./readings-list.component.css']
})
export class ReadingsListComponent implements OnInit, OnDestroy {

    humidity: HumiditySensor[];
    moisture: MoistureSensor[];
    proximity: ProximitySensor[];
    temperature: TemperatureSensor[];

    // Private
    private _unsubscribeAll: Subject<any>;

    @Input()
    heading: string = 'Current Readings';

    private temperatureSubscription;
    private humiditySubscription;
    private proximitySubscription;
    private moistureSubscription;
    private temperatureUnit: string = "celsius";

    constructor(
        private sseService: SseService,
        private humiditySensorService: HumiditySensorService,
        private temperatureSensorService: TemperatureSensorService,
        private moistureSensorService: MoistureSensorService,
        private proximitySensorService: ProximitySensorService,
        private toasterService: ToasterService
    ) {
        this._unsubscribeAll = new Subject();
        this.humidity = new Array<HumiditySensor>();
        this.moisture = new Array<MoistureSensor>();
        this.proximity = new Array<ProximitySensor>();
        this.temperature = new Array<TemperatureSensor>();
    }

    ngOnInit() {
        this.retrieveHumiditySensors();
        this.retrieveMoistureSensors();
        this.retrieveTemperatureSensors();
        this.retrieveProximitySensors();
    }

    toggleTemperatureUnit() {
        if (this.temperatureUnit === 'celsius')
            this.temperatureUnit = 'fahrenheit';
        else
            this.temperatureUnit = 'celsius';
    }

    private retrieveHumiditySensors() {
        this.humiditySensorService.findAll()
            .then((value) => {
                if (value !== null) {
                    this.humidity = value;
                    this.subscribeToHumidityEvents();
                }
            }).catch(error => this.toasterService.toast('Unable to retrieve humidity sensors', ToastType.DANGER))
    }

    private retrieveMoistureSensors() {
        this.moistureSensorService.findAll()
            .then((value) => {
                if (value !== null) {
                    this.moisture = value;
                    this.subscribeToMoistureEvents();
                }
            }).catch(error => this.toasterService.toast('Unable to retrieve moisture sensors', ToastType.DANGER))
    }

    private retrieveTemperatureSensors() {
        this.temperatureSensorService.findAll()
            .then((value) => {
                if (value !== null) {
                    this.temperature = value;
                    this.subscribeToTemperatureEvents();
                }
            }).catch(error => this.toasterService.toast('Unable to retrieve temperature sensors', ToastType.DANGER))
    }

    private retrieveProximitySensors() {
        this.proximitySensorService.findAll()
            .then((value) => {
                if (value !== null) {
                    this.proximity = value;
                    this.subscribeToProximityEvents();
                }
            }).catch(error => this.toasterService.toast('Unable to retrieve proximity sensors', ToastType.DANGER))
    }

    private subscribeToHumidityEvents() {
        this.sseService.humidity
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                    if (value !== null) {
                        this.handleHumidityEvent(value);
                    }
                }
            );
    }

    private subscribeToMoistureEvents() {
        this.sseService.moisture
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                    if (value !== null) {
                        // console.log('value is :' + value);
                        this.handleMoistureEvent(value);
                    }
                }
            );
    }

    private subscribeToTemperatureEvents() {
        this.sseService.temperature
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                    if (value !== null) {
                        //console.log('value is :' + value);
                        this.handleTemperatureEvent(value);
                    }
                }
            );
    }

    private subscribeToProximityEvents() {
        this.sseService.proximity
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                    if (value !== null) {
                        //console.log('value is :' + value);
                        this.handleProximityEvent(value);
                    }
                }
            );
    }

    private handleHumidityEvent(data: any) {
        //console.log('finding :' + data);
        let obj: any = this.humidity.find(e => e.id === data.componentId);
        //console.log('found :' + data.componentId);
        //console.log('components :' + JSON.stringify(data.humidity));
        if (obj) {
            obj.current = data.humidity;
        }
    }

    private handleMoistureEvent(data: any) {
        //console.log('finding :' + data);
        let obj: any = this.moisture.find(e => e.id === data.componentId);
        //console.log('found :' + data.componentId);
        //console.log('components :' + JSON.stringify(data.moisture));
        if (obj) {
            obj.current = data.moisture;
        }
    }

    private handleTemperatureEvent(data: any) {
        //console.log('finding :' + data);
        let obj: any = this.temperature.find(e => e.id === data.componentId);
        //console.log('found :' + data.componentId);
        //console.log('components :' + JSON.stringify(data.temperature));
        if (obj) {
            obj.current = data.temperature;
        }
    }

    private handleProximityEvent(data: any) {
        //console.log('finding :' + data);
        let obj: any = this.proximity.find(e => e.id === data.componentId);
        //console.log('found :' + data.componentId);
        //console.log('components :' + JSON.stringify(data.temperature));
        if (obj) {
            obj.current = data.proximity;
        }
    }

    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        if (this.humiditySubscription)
            this.humiditySubscription.unsubscribe();
        if (this.moistureSubscription)
            this.moistureSubscription.unsubscribe();
        if (this.temperatureSubscription)
            this.temperatureSubscription.unsubscribe();
        if (this.proximitySubscription)
            this.proximitySubscription.unsubscribe();
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
