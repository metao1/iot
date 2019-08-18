import {NgModule} from "@angular/core";
import {NotificationService} from "@persoinfo/services/notification/notification.service";
import {HumiditySensorService} from "@persoinfo/services/humidity-sensor/humidity-sensor.service";
import {MoistureSensorService} from "@persoinfo/services/moisture-sensor/moisture-sensor.service";
import {TemperatureSensorService} from "@persoinfo/services/temperature-sensor/temperature-sensor.service";
import {SseService} from "@persoinfo/services/sse/sse.service";
import {TemperatureDataService} from "@persoinfo/services/temperature-data/temperature-data.service";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {RelayService} from "@persoinfo/services/relay/relay.service";
import {HumidityDataService} from "@persoinfo/services/humidity-data/humidity-data.service";
import {RPiService} from "@persoinfo/services/rpi/rpi.service";
import {SettingsRPiComponentService} from "@persoinfo/services/rpi-settings/settings-rpicomponent.service";
import {ProximitySensorService} from "@persoinfo/services/proximity-sensor/proximity-sensor.service";
import {MoistureDataService} from "@persoinfo/services/moisture-service/moisture-data.service";

@NgModule({
    providers: [
        SseService,
        ProximitySensorService,
        HumiditySensorService,
        MoistureDataService,
        MoistureSensorService,
        TemperatureSensorService,
        TemperatureDataService,
        HumidityDataService,
        RPiComponentService,
        NotificationService,
        RPiService,
        SettingsRPiComponentService,
        RelayService
    ]
})
export class ServicesModule {
}