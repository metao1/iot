import {Injectable} from '@angular/core';

import {ToastMessage} from './toast-message.model';
import {ToastType} from './toast-type.enum';
import { Subject } from 'rxjs';

@Injectable()
export class ToasterService {

  enqueue: Subject<ToastMessage> = new Subject<ToastMessage>();
  dequeue: Subject<ToastMessage> = new Subject<ToastMessage>();

  constructor() { }

  toast(message: string, type?: ToastType, duration?: number) {
    const toastMessage = new ToastMessage(type ? type : ToastType.DEFAULT, message);
    this.enqueue.next(toastMessage);
    this.callbackTimeout(toastMessage, duration ? (duration * 1000) : 2000);
  }

  private callbackTimeout(toastMessage: ToastMessage, duration: number) {
    setTimeout(() => this.dequeue.next(toastMessage) , duration);
  }

}
