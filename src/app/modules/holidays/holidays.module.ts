import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import { HolidaysRoutingModule } from './holiday-routing.module';
import {
  BorderCountriesComponent,
  HolidaysCountryDataComponent,
} from './components';
import { FavoriteButtonComponent } from 'src/app/components';

@NgModule({
  declarations: [HolidaysComponent],
  imports: [
    CommonModule,
    HolidaysRoutingModule,
    BorderCountriesComponent,
    HolidaysCountryDataComponent,
    FavoriteButtonComponent,
  ],
})
export class HolidaysModule {}
