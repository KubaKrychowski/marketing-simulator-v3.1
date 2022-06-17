import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
const API_URL = 'https://localhost:44396/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  clientToken: string | null = null;
  constructor(private http: HttpClient) { }

  testApiConnection() {
    return this.http.get('https://localhost:7292/api/test');
  }

  sendPostRequest(path: string, body: any) {
    return this.http.post(`${API_URL}/${path}`, body);
  }

  sendGetRequest(path: string) {
    return this.http.get<User>(`${API_URL}/${path}`);
  }

  setApiToken(token: string) {
    this.clientToken = token;
  }
 // ! IT WOULDN'T WORK -> CHANGE PATH TO CONTROLLER ROUTE
  checkIfNameIsAvailable(name: string){
    return this.http.get<String>(`${API_URL}/${name}`);
  }

  checkIfEmailIsAvailable(email: string){
    return this.http.post<String>(`${API_URL}/BusyNames/email/${email}`,null);
  }
}
