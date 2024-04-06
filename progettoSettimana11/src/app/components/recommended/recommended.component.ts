import { Component } from '@angular/core';
import { Auth } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { FilmsService } from 'src/app/service/films.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent {
  user!: Auth | null;
  recommendedMovies: any[] = [];

  constructor(private authSrv: AuthService, private filmSrv: FilmsService) {}

  ngOnInit(): void {
      this.authSrv.user$.subscribe((user) => {
          this.user = user;
          if (user) {
            this.getRecommendedMovies(user.user.id);
          }
      });
  }

  async getRecommendedMovies(userId: number) {
    this.recommendedMovies = await this.filmSrv.getRecommended(userId)
    console.log('----------------------')
    console.log(this.recommendedMovies)
    console.log('----------------------')
  }
   
  getImgUrl(url: string) {
    url = `https://image.tmdb.org/t/p/w500${url}`;
    return url;
    
  
  }
}
