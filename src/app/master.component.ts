import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'countries',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class Countries {
    @Input() countries;
    @Input() countryId;
    @Output() countryIdChange = new EventEmitter();

    chooseCountry(id) {
        this.countryId = id;
        this.countryIdChange.emit(id);
    }
}
