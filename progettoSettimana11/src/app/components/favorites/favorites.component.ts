import { Component } from '@angular/core';
import { Favorite, Moviespopular } from 'src/app/interfaces/data';
import { FilmsService } from 'src/app/service/films.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/interfaces/auth';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites!: Favorite[];
  films!: Moviespopular[];
  imgUrl: any; 
  user!: Auth | null;



  constructor(private filmsService: FilmsService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => {
      this.user = user;
      this.getFavorites();
  });
  }

  getImgUrl(url: string) {
    this.imgUrl = `https://image.tmdb.org/t/p/w500${url}`;
    return this.imgUrl;
  }

  getFavorites() {
    this.filmsService.getFavorites(this.user?.user.id!).subscribe(favorites => {
      console.log(favorites);
      this.favorites = favorites;
      console.log(this.favorites);
      this.films = [];
      this.favorites.forEach(favorite => {
        this.filmsService.getFilm(favorite.movieId).subscribe(film => {
          this.films.push(film);
        });
      });
    });
  }


  removeFromFavorites(film: Moviespopular) {
    if (this.user && this.user.user) {
      const filmIndex = this.films.findIndex(favorite => favorite.id === film.id);
      if (filmIndex !== -1) {
        this.films.splice(filmIndex, 1); // Rimuovi il film dall'array
        this.filmsService.deleteFavorite(this.user.user.id, film.id).subscribe(() => {
          console.log('Favorite removed successfully');
        }, (error: any) => {
          console.error('Error removing favorite:', error);
        });
      }
    }
  }
  
  

  

}
