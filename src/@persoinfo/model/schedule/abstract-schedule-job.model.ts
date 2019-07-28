import {RPiComponent} from '@persoinfo/model/rpicomponent/rpicomponent.model';

export abstract class AbstractScheduleJob {
  constructor(
    public id: number,
    public component: RPiComponent,
    public enable: boolean
  ) {}
}
