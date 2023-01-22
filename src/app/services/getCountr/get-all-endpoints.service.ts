import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailableCountriesInfo, CountryInfo } from 'src/app/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllEndpointsService {
  constructor(private http: HttpClient) {}

  getAvailableCountries(): Observable<AvailableCountriesInfo[]> {
    return this.http.get<AvailableCountriesInfo[]>(
      'https://date.nager.at/api/v3/AvailableCountries'
    );
  }

  getCountrieHolidaysData(countryCode: string): Observable<CountryInfo> {
    return this.http.get<CountryInfo>(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
  }
}
