import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { FilmsComponent } from './components/films/films.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    EvidenceComponent,
    FilmsComponent,
    RecommendedComponent,
    UsersComponent,
    DetailsComponent,
    FavoritesComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbCarouselModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
