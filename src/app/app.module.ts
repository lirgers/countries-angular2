import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Countries } from './master.component';
import { AppComponent } from './app.component';
import { Cities } from './slave.component';

import { SearchFilterPipe } from './search-filter-pipe';

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
