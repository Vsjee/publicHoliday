import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteInfo } from 'src/app/models';
import { AppState } from 'src/app/state';
import { getFavoriteItems } from 'src/app/state/favorites/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoriteItemsList: FavoriteInfo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getFavoriteItems).subscribe((data) => {
      this.favoriteItemsList = data;
    });
  }
}
