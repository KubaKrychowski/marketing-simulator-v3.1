import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    console.log(this.clientToken);
    return this.http.post(`${API_URL}/${path}`,body, { headers: new HttpHeaders().set('token', this.clientToken) });
  }

  sendGetRequest(path: string) {
    return this.http.get<User>(`${API_URL}/${path}`, { headers: new HttpHeaders().set('token', this.clientToken) });
  }

  setApiToken(token: string) {
    this.clientToken = token;
  }

  sendLoginData(path: any, body: any) {
    return this.http.post(`${API_URL}/${path}`, body);
  }

  sendRegisterData(path: any, body: any) {
    return this.http.post(`${API_URL}/${path}`, body);
  }
  // TODO: Add uniqueNames.service.ts
  // ! IT WOULDN'T WORK -> CHANGE PATH TO CONTROLLER ROUTE
  checkIfNameIsAvailable(name: string) {
    return this.http.get<String>(`${API_URL}/${name}`,null);
  }

  checkIfEmailIsAvailable(email: string) {
    return this.http.post<String>(`${API_URL}/BusyNames/email/${email}`, null,);
  }

  checkIfCompanyNameIsAvailable(companyName: string) {
    return this.http.post<String>(`${API_URL}/BusyNames/companyName/${companyName}`, null, { headers: new HttpHeaders().set('token', this.clientToken) });
  }
}
