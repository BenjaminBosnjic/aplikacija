import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoliclinicAppComponent } from './components/policlinic-app/policlinic-app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component'; 

import { LoginService } from './services/login.service';
import { CatalogueService } from './services/catalogue.service';
import { PriceListService } from './services/price-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PoliclinicAppComponent,
    NavigationComponent,
    HomepageComponent,
    AboutUsComponent,
    PriceListComponent,
    EmploymentComponent,
    CatalogueComponent,
    BookingComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    CatalogueService,
    PriceListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
