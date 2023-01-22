import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AvailableCountriesInfo,
  CountryHolidaysData,
  CountryInfo,
} from 'src/app/types';
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

  getCountrieInfo(countryCode: string): Observable<CountryInfo> {
    return this.http.get<CountryInfo>(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
  }

  getCountrieHolidaysData(
    countryCode: string
  ): Observable<CountryHolidaysData[]> {
    return this.http.get<CountryHolidaysData[]>(
      `https://date.nager.at/api/v3/PublicHolidays/2022/${countryCode}`
    );
  }
}
