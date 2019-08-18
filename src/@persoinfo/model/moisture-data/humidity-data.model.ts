import {RPiComponent} from '../rpicomponent/rpicomponent.model';

export class MoistureData {

  constructor(
    public timestamp: Date,
    public component: RPiComponent,
    public moisture: number
  ) {}

}
