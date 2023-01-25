import { FavoriteInfo } from './favorite-item.mode';

export interface FavoriteState {
  loading: boolean;
  favorites: FavoriteInfo[];
}
