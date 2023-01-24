import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CountryHolidaysData } from 'src/app/types';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-holidays-country-data',
  templateUrl: './holidays-country-data.component.html',
  styleUrls: ['./holidays-country-data.component.scss'],
})
export class HolidaysCountryDataComponent {
  @Input() holidayData!: CountryHolidaysData;
}
