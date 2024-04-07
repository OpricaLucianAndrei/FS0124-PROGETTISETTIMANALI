import { Component } from '@angular/core';
import { Auth } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {
  user!: Auth | null;
  isDropdownOpen = false;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
      this.authSrv.user$.subscribe((user) => {
          this.user = user;
      });
  }

}
