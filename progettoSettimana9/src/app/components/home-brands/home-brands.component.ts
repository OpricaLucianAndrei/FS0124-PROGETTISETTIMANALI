import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home-brands',
  templateUrl: './home-brands.component.html',
  styleUrls: ['./home-brands.component.scss']
})
export class HomeBrandsComponent {
  post!: Post;
  posts!: Post[];
  ferrari: Post[] = [];
  lamborghini: Post[] = [];
  porsche: Post[] = [];
  rollsRoyce: Post[] = [];
  Ferrari: string = 'Ferrari';
  Lamborghini: string = 'Lamborghini';
  Porsche: string = 'Porsche';
  RollsRoyce: string = 'Rolls-Royce';



  constructor() {
      this.cars();
  }

  async cars() {
      const response = await fetch('../../assets/db (1).json');
      const data = await response.json();
      this.posts = data;
      console.log(this.posts);
      for(let i = 0; i < this.posts.length; i++) {
          if(this.posts[i].brand == 'Ferrari') {
              this.post = this.posts[i];
              this.ferrari.push(this.post);
          } else if(this.posts[i].brand == 'Lamborghini') {
              this.post = this.posts[i];
              this.lamborghini.push(this.post);
          } else if(this.posts[i].brand == 'Porsche') {
              this.post = this.posts[i];
              this.porsche.push(this.post);
          } else if(this.posts[i].brand == 'Rolls-Royce') {
              this.post = this.posts[i];
              this.rollsRoyce.push(this.post);
          }
      }
  }
}
