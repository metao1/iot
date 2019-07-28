import {NgModule} from "@angular/core";
import {NotificationService} from "@persoinfo/services/notification/notification.service";
import {HumiditySensorService} from "@persoinfo/services/humidity-sensor/humidity-sensor.service";
import {SseService} from "@persoinfo/services/sse/sse.service";

@NgModule({
    providers: [
        SseService,
        HumiditySensorService,
        NotificationService
    ]
})
export class ServicesModule {
}