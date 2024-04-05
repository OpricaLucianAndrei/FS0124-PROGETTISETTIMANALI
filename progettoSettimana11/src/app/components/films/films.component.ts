import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';
import { Moviespopular } from 'src/app/interfaces/data';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit{
  films!: Moviespopular[];
  imgUrl: any; 
  user!: Auth | null;

  constructor(private filmsService: FilmsService, private authSrv: AuthService) { }

ngOnInit(): void {
    this.getFilms();
    this.authSrv.user$.subscribe((user) => {
      this.user = user;
  });
}

getFilms() {
  this.filmsService.getFilms().subscribe(films => {
    this.films = films;
    console.log(this.films);
  });
}

getImgUrl(url: string) {
  this.imgUrl = `https://image.tmdb.org/t/p/w500${url}`;
  return this.imgUrl;
  

}



logout() {
    this.authSrv.logout();
}

}