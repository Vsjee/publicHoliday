import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countrieInfoInitialized } from 'src/app/models';
import { GetAllEndpointsService } from 'src/app/services';
import { CountryHolidaysData, CountryInfo } from 'src/app/types';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  countrieHolidaysData: CountryHolidaysData[] = [];
  countrieInfo: CountryInfo = countrieInfoInitialized;
  countryCode: string | any = '';

  constructor(
    private route: ActivatedRoute,
    private countryInfo: GetAllEndpointsService
  ) {}

  getCountrieInfo(): void {
    this.countryInfo.getCountrieInfo(this.countryCode).subscribe((data) => {
      this.countrieInfo = data;
    });
  }

  getCountrieHolidaysData(): void {
    this.countryInfo
      .getCountrieHolidaysData(this.countryCode)
      .subscribe((data) => {
        this.countrieHolidaysData = data;
      });
  }

  ngOnInit() {
    this.countryCode = this.route.snapshot.paramMap.get('country');
    this.getCountrieInfo();
    this.getCountrieHolidaysData();
  }
}
