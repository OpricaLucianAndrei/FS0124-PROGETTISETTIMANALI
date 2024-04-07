import { Injectable } from '@angular/core';
import { Favorite, Moviespopular } from '../interfaces/data';
import { Genre } from '../interfaces/data';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private apiUrl = environment.apiUrl;
  private imgApiUrl = environment.imgApiUrl;

  constructor(private http: HttpClient) { }

  getFilms() {
    let films = this.http.get<Moviespopular[]>(`${this.apiUrl}/movies-popular`);
    console.log(films);
    return films;
  }

  getFilm(id: number) {
    let film = this.http.get<Moviespopular>(`${this.apiUrl}/movies-popular/${id}`);
    console.log(film);
    return film;
  }

  getImgUrl(url: string) {
    let imgUrl = `${this.imgApiUrl}${url}`;
    console.log(imgUrl);
    return imgUrl;
  }

  getGenres() {
    let genres = this.http.get(`${this.apiUrl}/genres`);
    console.log(genres);
    return genres as Observable<Genre[]>;
  }

  getGenre(id: number) {
    let genre = this.http.get(`${this.apiUrl}/genres/${id}`);
    console.log(genre);
    return genre;
  }




  getFavorites(id: number) {
    let favorites = this.http.get(`${this.apiUrl}/favorites?userId=${id}`);
    console.log(favorites);
    return favorites as Observable<Favorite[]>;
  }
  async getRecommended(id: number): Promise<Moviespopular[]>{
    let favoritesP:Promise<Favorite[] | undefined> = this.getFavorites(id).toPromise()
    if (favoritesP !== undefined) {
      let favorites: (Favorite[] | undefined) = await favoritesP
      if (favorites !== undefined) {
        console.log(favorites.length)
        if (favorites.length === 0) {
          return []
        }
        let filmsP:Promise<Moviespopular[] | undefined> = this.getFilms().toPromise()
        console.log(filmsP)
        if (filmsP !== undefined) {
          let films: (Moviespopular[] | undefined) = await filmsP
          console.log(films)
          if (films !== undefined) {
            let genresP:Promise<Genre[] | undefined> = this.getGenres().toPromise()
            console.log(genresP)
            if (genresP !== undefined) {
              let genres: (Genre[] | undefined) = await genresP
              console.log(genres)
              if (genres !== undefined) {
                let favoriteGenres: Genre[] = []
                for (const favorite of favorites) {
                  let film:(Moviespopular | undefined) = await this.getFilm(favorite.movieId).toPromise()
                  if (film !== undefined) {
                    let generi = genres?.filter((genre: Genre) => {
                      if (film?.genre_ids.includes(genre.id)) {
                        favoriteGenres.push(genre)
                      }
                    })
                  }
                }
                // let favoriteGenres: Genre[] = genres.filter((genre: Genre) => {
                //   return favorites !== undefined && favorites.some(async (favorite: Favorite) => {
                //     let film:(Moviespopular | undefined) = await this.getFilm(favorite.movieId).toPromise()
                //     return film && film.genre_ids && film.genre_ids.includes(genre.id);
                //   })
                // })
                console.log('Generi preferiti', favoriteGenres)
                if (films) {
                  let recommended: Moviespopular[] = films.filter((film: Moviespopular) => {
                    let found= false
                    favoriteGenres.forEach((genre: Genre) => {
                      if (film.genre_ids.includes(genre.id)) {
                        found = true
                      }
                    })
                    return found
                  })
                  console.log('Generi raccomandati', recommended)
                  return recommended
                }
                return []
              }
            }
          }
        }
      }
    }
    return []
    // this.getFavorites(id).subscribe((favorites: any) => {
    //   console.log(favorites);
    //   this.getFilms().subscribe((films: Moviespopular[]) => {
    //     console.log(films);
    //     this.getGenres().subscribe((genres: any) => {
    //       console.log(genres);
    //       if (favorites.length === 0) {
    //         return;
    //       } else {
    //         let favoriteGenres = genres.filter((genre: any) => {
    //           return favorites.some((favorite: any) => {
    //             return favorite.genre_ids.includes(genre.id);
    //           });
    //         });
    //         console.log(favoriteGenres);
    //         let recommended = films.filter((film: any) => {
    //           return favoriteGenres.some((genre: any) => {
    //             return film.genre_ids.includes(genre.id);
    //           });
    //         });
    //         console.log(recommended);
    //         return recommended;
    //       }

    //     });
    //   });
    // }); 
 }

  addFavorite(userId: number, movieId: number) {
    let favorite = this.http.post(`${this.apiUrl}/favorites`, { userId, movieId });
    console.log(favorite);
    return favorite;

  }

  isFavorite(movieId: number, userId: number) {
    let favorite = this.http.get(`${this.apiUrl}/favorites?userId=${userId}&movieId=${movieId}`);
    console.log(favorite);
    return favorite;
  }
 
  deleteFavorite(userId: number, filmId: number) {
    return this.http.delete(`${this.apiUrl}/favorites?userId=${userId}&movieId=${filmId}`);
  }
  

  getUsers() {
    let users = this.http.get(`${this.apiUrl}/users`);
    console.log(users);
    return users;
  }
  


}
