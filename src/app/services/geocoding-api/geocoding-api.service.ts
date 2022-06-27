import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

@Injectable({
  providedIn: 'root'
})
export class GeoCodingApiService {

  constructor(private http: HttpClient) { }

  getAdressByCoordinates(lat: number, lng: number) {
    const params = new HttpParams()
      .set('latlng', `${lat}, ${lng}`)
      .append('key', '');

    return this.http.get<any>(`${API_URL}`, { params: params });
  }

}
