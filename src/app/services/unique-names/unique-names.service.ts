import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api/api.service';

const API_URL = 'https://localhost:44396/api';

@Injectable({
  providedIn: 'root'
})
export class UniqueNamesService {

  constructor(private http: HttpClient,private apiService: ApiService) { }

  checkIfNameIsAvailable(name: string) {
    return this.http.get<String>(`${API_URL}/${name}`,null);
  }

  checkIfEmailIsAvailable(email: string) {
    return this.http.post<String>(`${API_URL}/BusyNames/email/${email}`, null,);
  }

  checkIfCompanyNameIsAvailable(companyName: string) {
    return this.http.post<String>(`${API_URL}/BusyNames/companyName/${companyName}`, null, { headers: new HttpHeaders().set('token', this.apiService.clientToken) });
  }
}
