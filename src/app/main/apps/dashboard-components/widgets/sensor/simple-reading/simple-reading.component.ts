import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SensorReadingType} from "@persoinfo/model/dashboard/configuration/shared/sensor-reading-type.enum";
import {SimpleReadingConfiguration} from "@persoinfo/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading.configuration";
import {SseService} from "@persoinfo/services/sse/sse.service";
import {SimpleReadingColor} from "@persoinfo/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading-color.enum";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";

@Component({
    selector: 'app-simple-reading',
    templateUrl: './simple-reading.component.html',
    styleUrls: ['./simple-reading.component.css']
})
export class SimpleReadingComponent implements OnInit, OnDestroy {

    private sensorReadingType = SensorReadingType;

    private configuration: SimpleReadingConfiguration;

    @Input() atrib: string;

    @Input() sensorType: SensorReadingType;

    @Input() color: SimpleReadingColor;

    @Input() component: RPiComponent;

    private subscription;

    constructor(private sseService: SseService) {
    }

    ngOnInit() {
        this.configuration = new SimpleReadingConfiguration(this.component, this.sensorType, this.color);
        switch (this.atrib) {
            case SensorReadingType.HUMIDITY.toString().toLowerCase():
                this.subscribeToHumidityEvents();
                break;
            case SensorReadingType.MOISTURE.toString().toLowerCase():
                this.subscribeToMoistureEvents();
                break;
            case SensorReadingType.TEMPERATURE.toString().toLowerCase():
                this.subscribeToTemperatureEvents();
                break;
            default:
                break;
        }
    }

    private subscribeToHumidityEvents() {
        this.subscription = this.sseService
            .humidity
            .subscribe(humidity => {
                    try {
                        //console.log('humidity event simple-reading-component ', humidity);
                        this.handleHumidityEvents(humidity);
                    } catch (e) {
                        console.error(e);
                    }
                }
            );
    }

    private subscribeToMoistureEvents() {
        this.subscription = this.sseService
            .moisture
            .subscribe(moisture => {
                    try {
                        //console.log('moisture event simple-reading-component ', moisture);
                        this.handleMoistureEvents(moisture);
                    } catch (e) {
                        console.error(e);
                    }
                }
            );
    }

    private subscribeToTemperatureEvents() {
        this.subscription = this.sseService
            .temperature
            .subscribe(temperature => {
                    try {
                        //console.log('temperature event simple-reading-component ', temperature);
                        this.handleTemperatureEvents(temperature);
                    } catch (e) {
                        console.error(e);
                    }
                }
            );
    }

    private handleHumidityEvents(object) {
        if (this.configuration.component.id === object.componentId)
            this.configuration.component.current = object.humidity;
    }

    private handleTemperatureEvents(object) {
        if (this.configuration.component.id === object.componentId)
            this.configuration.component.current = object.temperature;
    }

    private handleProximityEvents(object) {
        if (this.configuration.component.id === object.componentId)
            this.configuration.component.current = object.distance;
    }

    private handleMoistureEvents(object) {
        if (this.configuration.component.id === object.componentId)
            this.configuration.component.current = object.moisture;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
