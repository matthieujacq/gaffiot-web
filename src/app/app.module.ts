import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { TrimPipe } from './trim.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchTableComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
