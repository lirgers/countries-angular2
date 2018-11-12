import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'edit-city-form',
    templateUrl: './edit.form.component.html',
    styleUrls: ['./edit.form.component.css']
})

export class EditCityForm {
    @Input() city;
    @Output() cityEdit = new EventEmitter();
    @Output() formCancel = new EventEmitter();
    newCityTitle : string = '';
    newCityDesc : string = '';

    edit() {
        this.city.title = this.newCityTitle;
        this.city.desc = this.newCityDesc;
        this.cityEdit.emit(this.city);
    }

    cancel() {
        this.formCancel.emit(this.city.id);
    }

    ngOnInit() {
        this.newCityTitle = this.city.title;
        this.newCityDesc = this.city.desc;
    }
}
