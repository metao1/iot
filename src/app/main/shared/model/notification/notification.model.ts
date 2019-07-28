import {RPiComponent} from 'app/main/shared/model/rpicomponent/rpicomponent.model';

export class Notification {

  constructor(
    public id: number,
    public timestamp: Date,
    public message: string,
    public component: RPiComponent,
    public isRead: boolean
  ) {}

}
