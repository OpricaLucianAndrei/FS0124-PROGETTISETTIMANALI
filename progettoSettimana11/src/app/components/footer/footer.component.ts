import { Component } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';
import { Moviespopular } from 'src/app/interfaces/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  films!: Moviespopular[];
  
  constructor(private filmsService: FilmsService) { }

  getFilms() {
    this.filmsService.getFilms().subscribe(films => {
      this.films = films;
      console.log(this.films);
    });
  }

}
