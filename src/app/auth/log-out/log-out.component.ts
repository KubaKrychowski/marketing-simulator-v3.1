import { ApiService } from 'src/app/services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.sass']
})
export class LogOutComponent implements OnInit {
  redirectionTime: number = 3000;
  constructor(private router: Router, private userService: UserService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.userService.user = null;
    this.apiService.clientToken = null;
    setTimeout(() => {
      this.goToHomePage();
    }, this.redirectionTime);


  }
  goToHomePage() {
    this.router.navigate(['']);
  }
}
