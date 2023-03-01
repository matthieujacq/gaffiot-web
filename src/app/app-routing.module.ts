import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionCardComponent } from './definition-card/definition-card.component';
import { LicencePageComponent } from './licence-page/licence-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'definition/:id', component: DefinitionCardComponent },
  { path: 'about', component: LicencePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
