import { Component } from '@angular/core';
import { Auth } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user!: Auth | null;
}
