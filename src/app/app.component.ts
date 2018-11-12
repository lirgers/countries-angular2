import { Component } from '@angular/core'
import { MasterService } from './master.service'
import { SlaveService } from './slave.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MasterService, SlaveService]
})

export class AppComponent {
    countries : object;
    cities : object;
    countryId : number;

    constructor(masterService : MasterService, slaveService: SlaveService) {
        this.countries = masterService.getCountries();
        this.cities = slaveService.getCities();
        this.countryId = 1;
    }
}
