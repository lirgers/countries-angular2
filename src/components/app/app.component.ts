import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { CitiesService } from '../../services/cities.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CountriesService, CitiesService]
})

export class AppComponent {
    countries : object;
    cities : object;
    countryId : number;

    constructor(masterService : CountriesService, citiesService: CitiesService) {
        this.countries = masterService.getCountries();
        this.cities = citiesService.getCities();
        this.countryId = 1;
    }
}
