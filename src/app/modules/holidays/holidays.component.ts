import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countrieInfoInitialized } from 'src/app/models';
import { GetAllEndpointsService } from 'src/app/services';
import { CountryInfo } from 'src/app/types';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  countrieInfo: CountryInfo = countrieInfoInitialized;
  countryCode: string | any = '';

  constructor(
    private route: ActivatedRoute,
    private countryInfo: GetAllEndpointsService
  ) {}

  ngOnInit() {
    this.countryCode = this.route.snapshot.paramMap.get('country');

    this.countryInfo
      .getCountrieHolidaysData(this.countryCode)
      .subscribe((data) => {
        this.countrieInfo = data;
        console.log(this.countrieInfo);
      });
  }
}
