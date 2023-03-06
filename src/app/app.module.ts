import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { TrimPipe } from './trim.pipe';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';
import { DefinitionCardComponent } from './definition-card/definition-card.component';
import { SanitizeHTMLPipe } from './sanitize-html.pipe';
import { LicencePageComponent } from './licence-page/licence-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SearchTableComponent,
    TrimPipe,
    SearchbarComponent,
    SearchPageComponent,
    DefinitionCardComponent,
    SanitizeHTMLPipe,
    LicencePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
