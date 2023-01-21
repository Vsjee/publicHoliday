import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailableCountriesInfo } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class GetAllEndpointsService {
  constructor(private http: HttpClient) {}

  getAvailableCountries() {
    return this.http.get<AvailableCountriesInfo[]>(
      'https://date.nager.at/api/v3/AvailableCountries'
    );
  }
}
