import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookingComponent } from './components/booking/booking.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { PricesComponent } from './components/prices/prices.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'price-list', component: PriceListComponent },
  { path: 'prices/:id', component: PricesComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
