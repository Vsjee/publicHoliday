import { createReducer, on } from '@ngrx/store';
import { FavoriteState } from 'src/app/models';
import { addFavoriteItem, removeFavoriteItem } from './favorites.actions';

export const favoriteInitialState: FavoriteState = {
  loading: false,
  favorites: [],
};

export const favoriteReducer = createReducer(
  favoriteInitialState,
  on(addFavoriteItem, (state, { favoriteItem }) => ({
    ...state,
    favorites: [
      ...state.favorites,
      {
        commonName: favoriteItem.commonName,
        countryCode: favoriteItem.countryCode,
        flag: favoriteItem.flag,
      },
    ],
  })),

  on(removeFavoriteItem, (state, { favoriteCountryName }) => ({
    ...state,
    favorites: [
      ...state.favorites.filter(
        (item) => item.commonName !== favoriteCountryName
      ),
    ],
  }))
);
