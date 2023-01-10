import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookingComponent } from './components/booking/booking.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
