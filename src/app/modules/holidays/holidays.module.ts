import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import { HolidaysRoutingModule } from './holiday-routing.module';
import { BorderCountriesComponent } from './components/border-countries/border-countries.component';

@NgModule({
  declarations: [HolidaysComponent],
  imports: [CommonModule, HolidaysRoutingModule, BorderCountriesComponent],
})
export class HolidaysModule {}
