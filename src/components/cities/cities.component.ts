import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})

export class Cities {
    title = 'Cities';
    isAddForm : boolean = false;
    editingCityId : number = -1;
    @Input() cities : any[];
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
        //this.citiesChange.emit(this.cities);
    }

    addCity(city) {
        let lastId = this.cities[this.cities.length - 1].id;

        this.cities.push({
            id: lastId + 1,
            country_id: this.countryId,
            title: city.title,
            desc: city.text
        });

        this.hideAddForm();
    }

    editCity(city) {
        const cityIndexToEdit = this.cities.findIndex(item => {
            return item.id === city.id;
        });

        if (cityIndexToEdit === -1) {
            return;
        }

        this.cities[cityIndexToEdit] = Object.assign({}, city);
        this.cities[cityIndexToEdit].azaz = 'azaz';

        //this.citiesChange.emit(this.cities);
        this.hideEditForm();
    }

    showAddForm() {
        this.isAddForm = true;
    }

    hideAddForm() {
        this.isAddForm = false;
    }

    showEditForm(id) {
        this.editingCityId = id;
    }

    hideEditForm() {
        this.editingCityId = -1;
    }
}
