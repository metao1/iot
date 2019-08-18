import {Component, OnInit} from '@angular/core';
import {PageLoading} from "@persoinfo/components/page-loader/page-loading";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {SimpleReadingColor} from "@persoinfo/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading-color.enum";
import {SensorReadingType} from "@persoinfo/model/dashboard/configuration/shared/sensor-reading-type.enum";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageLoading implements OnInit {

    //todo add setting button over the widget and set these data dynamically
    private temperatureComponent: RPiComponent;
    private color: SimpleReadingColor = SimpleReadingColor.RED;
    private type: SensorReadingType = SensorReadingType.TEMPERATURE;
    
    constructor(private  rpiComponentService: RPiComponentService) {
        super(true);
    }

    ngOnInit() {
        this.standby();
        setTimeout(() => {
            this.startOperations();
            this.ready()
        }, 1000);
        //console.log(DASHBOARD_DEFAULT);
    }

    private startOperations() {
        this.rpiComponentService
            .findAllByType(RPiComponentType.TEMPERATURE)
            .then((data: RPiComponent[]) => this.temperatureComponent = data[0]);
    }
}
