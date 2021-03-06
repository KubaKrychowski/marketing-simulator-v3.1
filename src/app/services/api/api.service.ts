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

  sendPostRequest(path: string, body: any) {
    return this.http.post(`${API_URL}/${path}`,body, { headers: new HttpHeaders().set('token', this.clientToken) });
  }

  sendGetRequest(path: string) {
    return this.http.get<User>(`${API_URL}/${path}`, { headers: new HttpHeaders().set('token', this.clientToken) });
  }

  sendLoginData(path: any, body: any) {
    return this.http.post(`${API_URL}/${path}`, body);
  }

  sendRegisterData(path: any, body: any) {
    return this.http.post(`${API_URL}/${path}`, body);
  }

  setApiToken(token: string) {
    this.clientToken = token;
  }
}
