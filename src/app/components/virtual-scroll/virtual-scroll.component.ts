import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AvailableCountriesInfo } from 'src/app/types';
import { GetAllEndpointsService } from 'src/app/services';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [ScrollingModule, RouterModule, MatButtonModule],
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent {
  availableCountries: AvailableCountriesInfo[] = [];

  constructor(private getData: GetAllEndpointsService) {}

  ngOnInit() {
    this.getData
      .getAvailableCountries()
      .subscribe((data: AvailableCountriesInfo[]) => {
        this.availableCountries = data;
      });
  }
}
