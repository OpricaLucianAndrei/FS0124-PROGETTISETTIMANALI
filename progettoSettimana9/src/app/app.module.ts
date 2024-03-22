import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeadingComponent } from './components/home-heading/home-heading.component';
import { HomeBrandsComponent } from './components/home-brands/home-brands.component';
import { HomeEvidenceCarsComponent } from './components/home-evidence-cars/home-evidence-cars.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandsHeadingComponent } from './components/brands-heading/brands-heading.component';
import { BrandsBodyComponent } from './components/brands-body/brands-body.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'brands/:brand', component: BrandsComponent },
  { path: 'car-details/:model', component: CarDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    HomeHeadingComponent,
    HomeBrandsComponent,
    HomeEvidenceCarsComponent,
    BrandsComponent,
    BrandsHeadingComponent,
    BrandsBodyComponent,
    CarDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
