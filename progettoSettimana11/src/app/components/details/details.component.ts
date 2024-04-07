import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';
import { ActivatedRoute } from '@angular/router';
import { Moviespopular } from 'src/app/interfaces/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id!: number;
  film!: Moviespopular;
  
  imgUrl: any; 

  constructor (private filmSrv: FilmsService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
    });
    this.getFilm(this.id);
  }

  getFilm(id: number): void {
    this.filmSrv.getFilm(id)
      .subscribe(film => {
        this.film = film;
        console.log(film); // Puoi fare qualcosa con i dettagli del film qui, ad esempio aggiornare le proprietà del componente per riflettere i dettagli del film
      });

  }

  getImgUrl(url: string) {
    this.imgUrl = `https://image.tmdb.org/t/p/w500${url}`;
    return this.imgUrl;
  }


}
