import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DetailsComponent } from './components/details/details.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  {
    path: 'recommended',
    loadChildren: () =>
      import('./components/recommended/recommended.component').then(
        (m) => m.RecommendedComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./components/details/details.component').then(
        (m) => m.DetailsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent, canDeactivate: [AuthGuard]},

  { path: 'login', component: LoginComponent, canDeactivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
