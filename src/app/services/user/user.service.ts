import { ApiService } from '../api/api.service';
import { User } from '../../shared/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : User | null = null;
  constructor(private apiService: ApiService) { }

  initializeUser(email: string) {
    //TODO: Add in future looking for user by uuid generated during register
    //* At this momemt user is getting by email
    return this.apiService.sendGetRequest(`Auth/getUser/${email}`).subscribe((res: User) => {
      this.user = res;
      this.user.IsLoggedIn = true;
    }, err => {
      console.log(err);
    })
  }

  destroyUserInstance() {
    this.user = null;
    //TODO: add log out user
  }

  updateUserData(user: User){
    return this.apiService.sendPatchRequest(``,user);
  }
}
