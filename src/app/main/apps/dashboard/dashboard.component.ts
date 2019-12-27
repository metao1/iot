import {Component, OnInit} from '@angular/core';
import {PageLoading} from "@persoinfo/components/page-loader/page-loading";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {SimpleReadingColor} from "@persoinfo/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading-color.enum";
import {SensorReadingType} from "@persoinfo/model/dashboard/configuration/shared/sensor-reading-type.enum";
import {SensorWidget} from "@persoinfo/model/dashboard/configuration/widget/sensor/sensor-widget.model";
import {SensorWidgetType} from "@persoinfo/model/dashboard/configuration/widget/sensor/sensor-widget-type.enum";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageLoading implements OnInit {

    //todo add setting button over the widget and set these data dynamically
    public sensorWidgets: SensorWidget[] = [];

    constructor(private  rpiComponentService: RPiComponentService) {
        super(true);
    }

    ngOnInit() {
        this.standby();
        setTimeout(() => {
            this.startOperations();
            this.ready()
        }, 1000);
        //
    }

    private startOperations() {
        //console.log(DASHBOARD_DEFAULT);
        this.rpiComponentService
            .findAllByType(RPiComponentType.TEMPERATURE)
            .then((data: RPiComponent[]) => this.sensorWidgets.push(new SensorWidget(SensorWidgetType.SIMPLE_SENSOR,
                SimpleReadingColor.RED, SensorReadingType.TEMPERATURE, data[0])));

        this.rpiComponentService
            .findAllByType(RPiComponentType.HUMIDITY)
            .then((data: RPiComponent[]) => {
                    this.sensorWidgets.push(new SensorWidget(SensorWidgetType.SIMPLE_SENSOR,
                        SimpleReadingColor.GREEN, SensorReadingType.HUMIDITY, data[0]));
                }
            );

        this.rpiComponentService
            .findAllByType(RPiComponentType.MOISTURE)
            .then((data: RPiComponent[]) => {
                    this.sensorWidgets.push(new SensorWidget(SensorWidgetType.SIMPLE_SENSOR,
                        SimpleReadingColor.ORANGE, SensorReadingType.MOISTURE, data[0]));
                }
            );

    }
}
