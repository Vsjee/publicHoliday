import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FavoriteInfo } from 'src/app/models';
import { AppState } from 'src/app/state';
import {
  addFavoriteItem,
  removeFavoriteItem,
} from 'src/app/state/favorites/favorites.actions';

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

  constructor(private router: Router, private store: Store<AppState>) {
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

  addItem(): void {
    this.favoriteItem = {
      commonName: this.favoriteName,
      countryCode: this.favoriteCode,
      flag: this.favoriteFlag,
    };
    this.store.dispatch(addFavoriteItem({ favoriteItem: this.favoriteItem }));
  }

  removeItem(): void {
    this.favoriteItem = {
      commonName: this.favoriteName,
      countryCode: this.favoriteCode,
      flag: this.favoriteFlag,
    };
    this.store.dispatch(
      removeFavoriteItem({ favoriteItem: this.favoriteItem })
    );
  }
}
