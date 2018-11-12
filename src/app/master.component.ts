import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'countries',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class Countries {
    title = 'Countries';
    @Input() countries;
    @Input() countryId;
    @Output() countryIdChange = new EventEmitter();

    chooseCountry(id) {
        this.countryId = id;
        this.countryIdChange.emit(id);
    }

    isChosen(id) {
        return id === this.countryId;
    }
}
