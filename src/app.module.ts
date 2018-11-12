import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Countries } from './components/countries/countries.component';
import { AppComponent } from './components/app/app.component';
import { Cities } from './components/cities/cities.component';
import { AddCityForm } from './components/add-city-form/add.form.component'

import { SearchFilterPipe } from './etc/search-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    Countries,
    Cities,
    AddCityForm,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
