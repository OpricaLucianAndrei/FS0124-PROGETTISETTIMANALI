import { Component } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';
import { User } from 'src/app/interfaces/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users!: User[];
  user!: User;


  constructor(private filmsService: FilmsService) {
    this.filmsService.getUsers().subscribe((users: any) => {
      this.users = users;
      console.log(users);
      console.log(this.users);
    });
  }


}
