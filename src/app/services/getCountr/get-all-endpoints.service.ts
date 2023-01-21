import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAllEndpointsService {
  constructor(private http: HttpClient) {}

  getAvailableCountries() {
    return this.http.get('https://date.nager.at/api/v3/AvailableCountries');
  }
}
