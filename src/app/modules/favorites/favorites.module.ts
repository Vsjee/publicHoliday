import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { favoritesRoutingModule } from './favorites-routing.module';
import { FavoriteButtonComponent } from 'src/app/components';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, favoritesRoutingModule, FavoriteButtonComponent],
})
export class FavoritesModule {}
