import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home-evidence-cars',
  templateUrl: './home-evidence-cars.component.html',
  styleUrls: ['./home-evidence-cars.component.scss']
})
export class HomeEvidenceCarsComponent {
  post!: Post;
  posts!: Post[];

  constructor() {
      this.showCars();
  }

  async showCars() {
    const response = await fetch('../../assets/db (1).json');
    const data = await response.json();
    this.posts = data;

    const shuffleArray = (array: Post[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    this.posts = shuffleArray(this.posts);

    let index = Math.floor(Math.random() * this.posts.length);
    this.post = this.posts[index];
    console.log(this.post);
}

}
