import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RPi} from "@persoinfo/model/rpi/rpi.model";
import {SystemState} from "@persoinfo/model/rpi/system-state.enum";
import {RPiService} from "@persoinfo/services/rpi/rpi.service";

@Component({
  selector: 'app-rpi',
  templateUrl: './rpi.component.html',
  styleUrls: ['./rpi.component.css']
})
export class RPiComponent implements OnInit {

  @Input()
  rpi: RPi;

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  systemState = SystemState;
  baseImageUrl = "BASE_IMAGE_URL";

  constructor(
    private router: Router,
    private rpiService: RPiService
  ) { }

  ngOnInit() {

  }

  view(id: number) {
    this.router.navigate(['/settings/rpi/', id]);
  }

  delete(id: number) {
    this.onDelete.emit(id);
  }

}
