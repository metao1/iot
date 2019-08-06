import {Component, OnInit} from '@angular/core';
import {PageLoading} from "@persoinfo/components/page-loader/page-loading";

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent extends PageLoading implements OnInit {

  constructor() {
    super(true);
  }

  ngOnInit() {
    setTimeout(() => this.ready(), 1000);
  }

}
