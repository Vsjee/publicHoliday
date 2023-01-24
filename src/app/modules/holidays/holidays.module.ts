import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import { HolidaysRoutingModule } from './holiday-routing.module';
import {
  BorderCountriesComponent,
  HolidaysCountryDataComponent,
} from './components';

@NgModule({
  declarations: [HolidaysComponent],
  imports: [
    CommonModule,
    HolidaysRoutingModule,
    BorderCountriesComponent,
    HolidaysCountryDataComponent,
  ],
})
export class HolidaysModule {}
