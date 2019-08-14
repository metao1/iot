import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MetricDataType} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/data-source/metric-data-type.enum";
import {MetricTimeSpan} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/data-source/metric-time-span.enum";
import {MetricCalculation} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/data-source/metric-calculation.enum";
import {DataSourceConfiguration} from "@persoinfo/model/dashboard/configuration/widget/graph/graph-table/data-source/data-source.configuration";
import {RPiComponent} from "@persoinfo/model/rpicomponent/rpicomponent.model";
import {RPiComponentType} from "@persoinfo/model/rpicomponent/rpicomponent-type.enum";
import {RPiComponentService} from "@persoinfo/services/rpicomponent/rpicomponent.service";

@Component({
    selector: 'app-graph-table-data',
    templateUrl: './graph-table-data.component.html',
    styleUrls: ['./graph-table-data.component.css']
})
export class GraphTableDataComponent implements OnInit {

    private metricDataTypeEnum = MetricDataType;
    private metricCalculationEnum = MetricCalculation;
    private metricTimeSpanEnum = MetricTimeSpan;

    @Output()
    onUpdateData: EventEmitter<null> = new EventEmitter<null>();

    @Input()
    configuration: DataSourceConfiguration;

    @Input()
    isLoading: boolean = true;

    private components: RPiComponent[];

    selectedComponent: RPiComponent;

    constructor(
        private rPiComponentService: RPiComponentService
    ) {
        this.configuration = new DataSourceConfiguration();
    }

    ngOnInit() {
        this.rPiComponentService
            .findAllByType(RPiComponentType.TEMPERATURE)
            .then((data: RPiComponent[]) => {
                    //console.log('components:', JSON.stringify(data));
                    this.components = data;
                    this.configuration.component = this.components[0];
                    this.updateData()
                },
            ).catch(error => console.log("error getting graph-table-data components"));
    }

    changeMetricDataType(dataType: MetricDataType) {
        this.configuration.dataType = dataType;
    }

    changeMetricCalc(calculation: MetricCalculation) {
        this.configuration.calculation = calculation;
    }

    changeSelectedComponent(component: RPiComponent) {
        this.configuration.component = component;
    }

    updateData() {
        this.onUpdateData.emit(null);
    }

}
