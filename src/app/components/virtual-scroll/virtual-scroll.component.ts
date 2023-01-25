import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GetAllEndpointsService } from 'src/app/services';
import { AvailableCountriesInfo } from 'src/app/types';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent {
  availableCountries: AvailableCountriesInfo[] = [];
  searchAvailableCountries: AvailableCountriesInfo[] = [];

  form = new FormGroup({
    search: new FormControl(''),
  });

  constructor(private getData: GetAllEndpointsService) {}

  handleSubmit(): void {
    this.searchAvailableCountries = this.availableCountries.filter((item) => {
      let searchValue: string | any = this.form.value.search;
      let countryName: string = item.name.toLowerCase();
      let match: string = searchValue.toLowerCase();
      return countryName.includes(match);
    });
  }

  handleChange(): void {
    this.searchAvailableCountries = this.availableCountries;
  }

  ngOnInit() {
    this.getData
      .getAvailableCountries()
      .subscribe((data: AvailableCountriesInfo[]) => {
        this.availableCountries = data;
        this.searchAvailableCountries = data;
      });
  }
}
