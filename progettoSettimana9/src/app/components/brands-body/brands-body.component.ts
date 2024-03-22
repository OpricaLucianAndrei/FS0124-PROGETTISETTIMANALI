import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brands-body',
  templateUrl: './brands-body.component.html',
  styleUrls: ['./brands-body.component.scss']
})
export class BrandsBodyComponent  {
  postBrand!: string;
  post!: Post;
  posts: Post[] = [];

  constructor(private route: ActivatedRoute) {
    console.log('test');
    
    this.route.params.subscribe(params => {
      this.postBrand = params['brand'];
      console.log(this.postBrand); 
      this.refreshPosts();
    });
  }

  
  async refreshPosts(): Promise<void> {
    try {
      const response = await fetch('../../assets/db (1).json');
      const posts = await response.json();
      
      this.posts = posts.filter((post: Post) => post.brand === this.postBrand);
    } catch (error) {
      console.error('Errore nel caricamento dei dati:', error);
    }
  }

}
