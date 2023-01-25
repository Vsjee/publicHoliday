import { createSelector } from '@ngrx/store';
import { FavoriteState } from 'src/app/models';
import { AppState } from '../app.state';

export const appState = (state: AppState) => state.favorites;

export const getFavoriteItems = createSelector(
  appState,
  (state: FavoriteState) => state.favorites
);
