import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HumiditySensor} from "@persoinfo/model/rpicomponent/humidity-sensor/humidity-sensor.model";
import {MoistureSensor} from "@persoinfo/model/rpicomponent/moisture-sensor/moisture-sensor.model";
import {ProximitySensor} from "@persoinfo/model/rpicomponent/proximity-sensor/proximity-sensor.model";
import {TemperatureSensor} from "@persoinfo/model/rpicomponent/temperature-sensor/temperature-sensor.model";
import {HumiditySensorService} from "@persoinfo/services/humidity-sensor/humidity-sensor.service";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {SseService} from "@persoinfo/services/sse/sse.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";

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
        private toasterService: ToasterService
        /*,
        private moistureSensorService: MoistureSensorService,
        private proximitySensorService: ProximitySensorService,
        private temperatureSensorService: TemperatureSensorService,
        private sseService: SseService,
        private toasterService: ToasterService*/
    ) {
        this._unsubscribeAll = new Subject();
        this.humidity = new Array<HumiditySensor>();
        this.moisture = new Array<MoistureSensor>();
        this.proximity = new Array<ProximitySensor>();
        this.temperature = new Array<TemperatureSensor>();
    }

    ngOnInit() {
        this.retrieveHumiditySensors();
        /*this.retrieveTemperatureSensors();
      this.retrieveProximitySensors();
      this.retrieveMoistureSensors();*/
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
                console.log('ok:' + value);
                if (value !== null) {
                    this.humidity = value;
                    this.subscribeToHumidityEvents();
                }
            }).catch(error => this.toasterService.toast('Unable to retrieve humidity sensors', ToastType.DANGER))
    }

    /*
      private retrieveMoistureSensors() {
        this.moistureSensorService.findAll()
          .subscribe(
            data => {
              this.moisture = data;
              this.subscribeToMoistureEvents();
            },
            error => this.toasterService.toast('Unable to retrieve moisture sensors', ToastType.DANGER)
          );
      }

      private retrieveProximitySensors() {
        this.proximitySensorService.findAll()
          .subscribe(
            data => {
              this.proximity = data;
              this.subscribeToProximityEvents();
            },
            error => this.toasterService.toast('Unable to retreive proximity sensors', ToastType.DANGER)
          );
      }

      private retrieveTemperatureSensors() {
        this.temperatureSensorService.findAll()
          .subscribe(
            data => {
              this.temperature = data;
              this.subscribeToTemperatureEvents();
            },
            error => this.toasterService.toast('Unable to retrieve temperature sensors', ToastType.DANGER)
          );
      }

      private subscribeToTemperatureEvents() {
        this.temperatureSubscription = this.sseService.temperatureState
          .subscribe(
            temperature => this.handleTemperatureEvent(temperature)
          );
      }

      private subscribeToHumidityEvents() {
        this.humiditySubscription = this.sseService.humidityState
          .subscribe(
            humidity => {
              this.handleHumidityEvent(humidity);
            }
          );
      }

      private subscribeToProximityEvents() {
        this.proximitySubscription = this.sseService.proximityState
          .subscribe(
            proximity => {
              try {
                this.handleProximityEvent(proximity)
              } catch (e) {
              }
            }
          );
      }

      private subscribeToMoistureEvents() {
        this.moistureSubscription = this.sseService.moistureState
          .subscribe(
            moisture => this.handleMoistureEvent(moisture)
          )
      }

      private handleTemperatureEvent(data: any) {
        let obj: any = this.temperature.find(e => e.id === data.componentId);
        if (obj) {
          obj.current = data.temperature;
        } else {
          console.log('object did not found');
        }
      }

      private handleHumidityEvent(data: any) {
        let obj: any = this.humidity.find(e => e.id === data.componentId);
        obj.current = data.humidity;
      }

      private handleProximityEvent(data: any) {
        let obj: any = this.proximity.find(e => e.id === data.component.id);
        obj.current = data.distance;
      }

      private handleMoistureEvent(data: any) {
        let obj: any = this.moisture.find(e => e.id === data.component.id);
        obj.current = data.moisture;
      }

      ngOnDestroy() {
        if (this.temperatureSubscription)
          this.temperatureSubscription.unsubscribe();
        if (this.humiditySubscription)
          this.humiditySubscription.unsubscribe();
        if (this.proximitySubscription)
          this.proximitySubscription.unsubscribe();
        if (this.moistureSubscription)
          this.moistureSubscription.unsubscribe();
      }*/

    private subscribeToHumidityEvents() {
        this.sseService.humidity
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                    if (value !== null) {
                        console.log('value is :' + value);
                        this.handleHumidityEvent(value);
                    }
                }
            );
    }

    private handleHumidityEvent(data: any) {
        console.log('finding :' + data);
        let obj: any = this.humidity.find(e => e.id === data.componentId);
        if (obj && obj.current) {
            obj.current = data.humidity;
        }
    }

    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        if (this.humiditySubscription)
            this.humiditySubscription.unsubscribe();
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
