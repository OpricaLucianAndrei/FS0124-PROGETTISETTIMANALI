import { Component } from '@angular/core';
import { Auth } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  user!: Auth | null;
  isDropdownOpen = false;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
      this.authSrv.user$.subscribe((user) => {
          this.user = user;
      });
  }
}
