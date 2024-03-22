import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-brands-heading',
  templateUrl: './brands-heading.component.html',
  styleUrls: ['./brands-heading.component.scss']
})
export class BrandsHeadingComponent  implements OnInit {
  postBrand!: string;
  post!: Post;
  posts: Post[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.postBrand = params['brand'];
      console.log(this.postBrand);
      
    });
  }
  ngOnInit(): void {
    fetch('../../assets/db (1).json')
      .then(response => response.json())
      .then(posts => {
        this.posts = posts.filter((post: Post) => post.brand === this.postBrand);
        console.log(this.posts);
      })
      .catch(error => console.error('Errore nel caricamento dei dati:', error));
  }
  


}