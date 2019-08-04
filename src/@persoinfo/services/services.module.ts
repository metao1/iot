import {NgModule} from "@angular/core";
import {NotificationService} from "@persoinfo/services/notification/notification.service";
import {HumiditySensorService} from "@persoinfo/services/humidity-sensor/humidity-sensor.service";
import {MoistureSensorService} from "@persoinfo/services/moisture-sensor/moisture-sensor.service";
import {TemperatureSensorService} from "@persoinfo/services/temperature-sensor/temperature-sensor.service";
import {SseService} from "@persoinfo/services/sse/sse.service";

@NgModule({
    providers: [
        SseService,
        HumiditySensorService,
        MoistureSensorService,
        TemperatureSensorService,
        NotificationService
    ]
})
export class ServicesModule {
}