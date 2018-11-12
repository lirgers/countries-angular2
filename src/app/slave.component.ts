import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cities',
    templateUrl: './slave.component.html',
    styleUrls: ['./slave.component.css']
})

export class Cities {
    title = 'Cities';
    @Input() cities;
    @Input() countryId;
    @Output() citiesChange = new EventEmitter();

    deleteCity(id) {
        let index = this.cities.findIndex(function(city) {
            return city.id == id;
        });

        if (index === -1) {
            return;
        }

        this.cities.splice(index, 1);
        console.log(this.cities);
        this.citiesChange.emit(this.cities);
    }
}
