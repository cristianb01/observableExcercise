import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';


const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
