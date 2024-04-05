import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/interfaces/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user!: Auth | null;
  isDropdownOpen = false;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
      this.authSrv.user$.subscribe((user) => {
          this.user = user;
      });
  }

  logout() {
      this.authSrv.logout();
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    if (this.isDropdownOpen && event.target && !(event.target as Element).closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }

}
