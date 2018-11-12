import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-city-form',
    templateUrl: './add.form.component.html',
    styleUrls: ['./add.form.component.css']
})

export class AddCityForm {
    @Output() cityAdd = new EventEmitter();
    @Output() formCancel = new EventEmitter();
    newCityTitle : string;
    newCityText : string;

    add() {
        this.cityAdd.emit({
            title: this.newCityTitle,
            text: this.newCityText
        });
    }

    cancel() {
        this.formCancel.emit();
    }
}
