import { Injectable } from '@angular/core';
import { Moviespopular } from '../interfaces/data';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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
    return genres;
  }

  getGenre(id: number) {
    let genre = this.http.get(`${this.apiUrl}/genres/${id}`);
    console.log(genre);
    return genre;
  }

  getRecommended(id: number) {
    let recommended = this.http.get(`${this.apiUrl}/movies-popular/${id}/recommended`);
    console.log(recommended);
    return recommended;
  }

  getFavorites(id: number) {
    let favorites = this.http.get(`${this.apiUrl}/favorites?userId=${id}`);
    console.log(favorites);
    return favorites;
  }

  addFavorite(favorite: any) {
    let newFavorite = this.http.post(`${this.apiUrl}/favorites`, favorite);
    console.log(newFavorite);
    return newFavorite;
  }

  deleteFavorite(id: number) {
    let deletedFavorite = this.http.delete(`${this.apiUrl}/favorites/${id}`);
    console.log(deletedFavorite);
    return deletedFavorite;
  }

  


}
