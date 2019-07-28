import {Component} from '@angular/core';
import {ToasterLocation} from "@persoinfo/components/toaster/toaster-location.enum";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private toasterLocation = ToasterLocation;
}
