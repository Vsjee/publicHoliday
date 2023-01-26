import { Component } from '@angular/core';
import { FavoriteInfo } from 'src/app/models';
import { getLocalStorageData } from 'src/app/utilities';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoriteItemsList: FavoriteInfo[] = [];

  constructor() {}

  ngOnInit(): void {
    let parseData = getLocalStorageData();
    this.favoriteItemsList = parseData;
  }
}
