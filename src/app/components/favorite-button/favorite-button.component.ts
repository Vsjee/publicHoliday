import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FavoriteInfo } from 'src/app/models';
import { OpenSnackService } from 'src/app/services';
import { AppState } from 'src/app/state';
import {
  addFavoriteItem,
  removeFavoriteItem,
} from 'src/app/state/favorites/favorites.actions';
import { getFavoriteItems } from 'src/app/state/favorites/favorites.selectors';
import { setLocalStorage } from 'src/app/utilities';

export let key: string = 'favorites';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  @Input() favoriteName!: string;
  @Input() favoriteCode!: string;
  @Input() favoriteFlag!: string;
  favoriteItem!: FavoriteInfo;
  show: boolean = false;
  stateData: FavoriteInfo[] = [];

  constructor(
    private openSnack: OpenSnackService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === 'favorites') {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    });
  }

  fillFavoriteItem(): FavoriteInfo {
    let favoriteItem: FavoriteInfo = {
      commonName: this.favoriteName,
      countryCode: this.favoriteCode,
      flag: this.favoriteFlag,
    };
    return favoriteItem;
  }

  setLocal(): void {
    this.store.select(getFavoriteItems).subscribe((data) => {
      setLocalStorage<FavoriteInfo[]>(key, data);
    });
  }

  getStateData(): void {
    this.store.select(getFavoriteItems).subscribe((data) => {
      this.stateData = data;
    });
  }

  addItem(): void {
    this.getStateData();

    let find = this.stateData.some(
      (data: FavoriteInfo) => data.commonName === this.favoriteName
    );

    if (find) {
      this.openSnack.openSnack('item already exists');
    } else {
      this.favoriteItem = this.fillFavoriteItem();
      this.store.dispatch(addFavoriteItem({ favoriteItem: this.favoriteItem }));
      this.setLocal();
      this.openSnack.openSnack('item was sucessfully added');
    }
  }

  removeItem(): void {
    this.favoriteItem = this.fillFavoriteItem();
    this.store.dispatch(
      removeFavoriteItem({ favoriteItem: this.favoriteItem })
    );
    this.setLocal();
    this.openSnack.openSnack('item was sucessfully removed');
    window.location.reload();
  }
}
