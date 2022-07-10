import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, public userService: UserService) {}

  ngOnInit(): void {}

  goToStartPage(): void {
    this.router.navigate(['/start']);
  }

  goToUserProfileCreator(): void {
    this.router.navigate(['/start/create-user-profile']);
  }

  goToLogInPage(): void {
    this.router.navigate(['/auth/log-in']);
  }

  goToLogOutPage(): void {
    this.router.navigate(['/auth/log-out']);
  }

  goToRegisterPage(): void {
    this.router.navigate(['/auth/register']);
  }

  goToMarketPage(): void {
    this.router.navigate(['/market/results']);
  }

  goToAdminPanel(): void {
    this.router.navigate(['/admin-panel']);
  }
}
