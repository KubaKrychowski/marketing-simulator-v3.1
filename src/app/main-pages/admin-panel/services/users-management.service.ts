import { User } from 'src/app/shared/models/user.model';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})

export class UsersManagementService {

  constructor(private apiService: ApiService) { }

  getUsersData(){
    return this.apiService.sendGetRequest('admin-panel/readAll');
  }
}
