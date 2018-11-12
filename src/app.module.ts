import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Countries } from './components/countries/countries.component';
import { AppComponent } from './components/app/app.component';
import { Cities } from './components/cities/cities.component';

import { SearchFilterPipe } from './etc/search-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    Countries,
    Cities,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
