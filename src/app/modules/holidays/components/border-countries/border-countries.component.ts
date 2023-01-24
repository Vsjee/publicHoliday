import { Component, Input } from '@angular/core';
import { BorderCountryInfo, BorderCountryInfoWithFlag } from 'src/app/types';
import { HolidaysRoutingModule } from '../../holiday-routing.module';

@Component({
  standalone: true,
  imports: [HolidaysRoutingModule],
  selector: 'app-border-countries',
  templateUrl: './border-countries.component.html',
  styleUrls: ['./border-countries.component.scss'],
})
export class BorderCountriesComponent {
  @Input() borderCountry!: BorderCountryInfo;
  borderCountryWithFlag!: BorderCountryInfoWithFlag;

  ngOnInit() {
    let cd = this.borderCountry.countryCode.toLowerCase();
    let flag = `https://date.nager.at/images/circle-flags/flags/${cd}.svg`;
    this.borderCountryWithFlag = { ...this.borderCountry, flag: flag };
  }
}
