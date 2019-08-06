import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Page} from "@persoinfo/model/paging/page.model";
import {GraphTableConfiguration} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/graph-table.configuration";
import {OrientationType} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/orientation-type.enum";
import {GraphType} from "@persoinfo/model/dashboard/configuration/widget/graph/graph/graph-type.enum";
import {MetricDataType} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/data-source/metric-data-type.enum";
import {TemperatureDataService} from "@persoinfo/services/temperature-data/temperature-data.service";
import {ToastType} from "@persoinfo/components/toaster/toast-type.enum";
import {ToasterService} from "@persoinfo/components/toaster/toaster.service";
import {HumidityDataService} from "@persoinfo/services/humidity-data/humidity-data.service";

@Component({
    selector: 'app-graph-table',
    templateUrl: './graph-table.component.html',
    styleUrls: ['./graph-table.component.css']
})
export class GraphTableComponent implements OnInit {

    private orientationTypeEnum = OrientationType;
    private graphTypeEnum = GraphType;

    @Output()
    onPageChange = new EventEmitter<any>();

    @Input()
    configuration: GraphTableConfiguration;

    title: string = '';
    titleLabel: string;

    page: Page<any>;
    isLoading: boolean = true;

    constructor(
        private temperatureDataService: TemperatureDataService,
        private toasterService: ToasterService,
        private humidityDataService: HumidityDataService
    ) {
        this.configuration = new GraphTableConfiguration();
    }

    ngOnInit() {
    }

    pageChange(page: number) {
        this.page.number = page;
        this.processDataRequest();
    }

    onUpdateData(event: null) {
        this.isLoading = true;
        if (this.page) this.page.number = 0;
        this.processDataRequest();
    }

    onChangeOrientation(orientation: OrientationType) {
        this.configuration.orientation = orientation;
    }

    onChangeGraphType(graphType: GraphType) {
        this.configuration.graph.type = graphType;
    }

    onChangeGraphVisibility(visible: boolean) {
        this.configuration.graph.visible = visible;
    }

    onChangeTableVisibility(visible: boolean) {
        this.configuration.table.visible = visible;
    }

    private processDataRequest() {
        if (this.configuration.datasource.dataType === MetricDataType.TEMPERATURE)
            this.updateTemperatureData();
        else if (this.configuration.datasource.dataType === MetricDataType.HUMIDITY)
            this.updateHumidityData();
    }

    private updateTemperatureData() {
        let url: string = this.configuration.datasource.timeSpan + '/' + this.configuration.datasource.calculation;
        console.log('update :' + JSON.stringify(this.configuration));
        this.temperatureDataService
            .findCustomByComponent(this.configuration.datasource.component.id, url, this.page ? this.page.number : 0)
            .then(
                data => {
                    this.handleTemperatureDataUpdate(data);
                    this.isLoading = false;
                }).catch(error => {
                this.toasterService.toast('Error retrieving humidity data', ToastType.DANGER);
                this.isLoading = false;
            }
        );
    }

    private updateHumidityData() {
        let url: string = this.configuration.datasource.timeSpan + '/' + this.configuration.datasource.calculation;
        this.humidityDataService
            .findCustomByComponent(this.configuration.datasource.component.id, url, this.page ? this.page.number : 0)
            .then(data => {
                    this.handleHumidityDataUpdate(data);
                    this.isLoading = false;
                }
            ).catch(error => {
                this.toasterService.toast('Error retrieving temperature data', ToastType.DANGER);
                this.isLoading = false;
            }
        );
    }

    private handleTemperatureDataUpdate(data: any) {
        this.page = data;
        // graphData & graphLabels will be directed at configuration.graph.labels etc
        this.configuration.graph.data = [];
        this.configuration.graph.labels = [];
        this.page.content.forEach(e => {
            this.configuration.graph.data.push(e.temperature); // built data for graph
            this.configuration.graph.labels.push(e.timestamp.getDate().toString());      // built labels for graph
        });
        this.updateTitle();
        this.updateTitleLabel();
    }

    private handleHumidityDataUpdate(data: any) {
        this.page = data;
        this.configuration.graph.data = [];
        this.configuration.graph.labels = [];
        this.page.content.forEach(e => {
            this.configuration.graph.data.push(e.humidity); // built data for graph
            this.configuration.graph.labels.push(e.timestamp.getDate().toString());      // built labels for graph
        });
        this.updateTitle();
        this.updateTitleLabel();
    }

    private updateTitle() {
        this.title = this.configuration.datasource.dataType + '_' + this.configuration.datasource.timeSpan + '_' + this.configuration.datasource.calculation;
    }

    private updateTitleLabel() {
        this.titleLabel = this.configuration.datasource.component.alias;
    }

}
