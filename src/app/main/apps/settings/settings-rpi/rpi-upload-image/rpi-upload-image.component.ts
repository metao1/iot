import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SERVER_API_URL} from "app/app.constants";

@Component({
  selector: 'app-rpi-upload-image',
  templateUrl: './rpi-upload-image.component.html',
  styleUrls: ['./rpi-upload-image.component.css']
})
export class RPiUploadImageComponent implements OnInit, OnDestroy {

  private url:string;
  private maxFilesInQueue: number;
  subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.url = SERVER_API_URL + 'rpi/' + params['id'] + '/image';
      }
    );
    this.maxFilesInQueue = 1;
  }

  ngOnDestroy;

}
