import {ControlWidgetType} from './control-widget-type.enum';
import {ControlWidgetConfiguration} from './control-widget.configuration';
import {Widget} from '@persoinfo/model/dashboard/configuration/widget/widget.model';
import {WidgetType} from '@persoinfo/model/dashboard/configuration/widget/widget-type.enum';

export class ControlWidget extends Widget {

  constructor(
    public type: ControlWidgetType,
    public configuration: ControlWidgetConfiguration
  ) {
    super(WidgetType.CONTROL);
  }

}
