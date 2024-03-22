import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  postModel!: string;
  post!: Post;
  posts: Post[] = [];
  priceView: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.postModel = params['model'];
      console.log(this.postModel);

    });
  }
  ngOnInit(): void {
    fetch('../../assets/db (1).json')
      .then(response => response.json())
      .then(posts => {
        const filteredPosts = posts.filter((post: Post) => post.model === this.postModel);
        if (filteredPosts.length > 0) {
          this.post = filteredPosts[0];
          this.priceView = this.post.price.toLocaleString('it-IT', { minimumFractionDigits: 0 });
        } else {
          console.log("No post found with model: " + this.postModel);
        }
      })
      .catch(error => console.error('Errore nel caricamento dei dati:', error));
  }




}