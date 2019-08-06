import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SystemState} from "@persoinfo/model/rpi/system-state.enum";
import {RPi} from "@persoinfo/model/rpi/rpi.model";
import {RPiService} from "@persoinfo/services/rpi/rpi.service";

@Component({
  selector: 'app-rpi-details',
  templateUrl: './rpi-details.component.html',
  styleUrls: ['./rpi-details.component.css']
})
export class RPiDetailsComponent implements OnInit, OnDestroy {

  private id: number;
  private subscription: any;
  private hasImageUploadShown:boolean = false;

  systemState = SystemState;
  baseImageUrl = "BASE_IMAGE_URL";
  rpi: RPi;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rpiService: RPiService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.retrieveRPiDetails(this.id);
      }
    );
  }

  showImageUploadButton(isShown: boolean) {
    this.hasImageUploadShown = isShown;
  }

  private retrieveRPiDetails(id: number) {
    this.rpiService.findOne(this.id)
      .subscribe(
        data => this.rpi = data,
        error => {
          console.log("error get details");
          this.router.navigate(['/settings/rpi']);
        },
        () => {
          if(!this.rpi)
            this.router.navigate(['/settings/rpi']);
        }
      )
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
