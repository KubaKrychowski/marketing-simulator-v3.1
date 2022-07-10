import { User } from 'src/app/shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UsersManagementService } from '../services/users-management.service';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.sass'],
})
export class UsersManagementComponent implements OnInit {
  users: Array<any> = [];
  areUsersInitialized: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsersData().subscribe((response) => {
      //   for(let userIndex = 0; userIndex < response.length; userIndex++) {
      //     this.users.push(response[userIndex]);
      // });

      for (const [key, value] of Object.entries(response)) {
        this.users.push(value);
      }
      this.areUsersInitialized = true;
    });
  }
}
