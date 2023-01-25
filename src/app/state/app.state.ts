import { ActionReducerMap } from '@ngrx/store';
import { FavoriteState } from '../models';
import { favoriteReducer } from './favorites/favorites.reducers';

export interface AppState {
  favorites: FavoriteState;
}

export const ROOT__REDUCERS: ActionReducerMap<AppState> = {
  favorites: favoriteReducer,
};
