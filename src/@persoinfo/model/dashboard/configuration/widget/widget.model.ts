import {WidgetType} from './widget-type.enum';

export abstract class Widget {

  constructor(protected widgetType: WidgetType) {}

}
