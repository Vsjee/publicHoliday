import { createReducer, on } from '@ngrx/store';
import { FavoriteState } from 'src/app/models';
import { getLocalStorageData } from 'src/app/utilities';
import { addFavoriteItem, removeFavoriteItem } from './favorites.actions';

export const favoriteInitialState: FavoriteState = {
  loading: false,
  favorites: getLocalStorageData(),
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

  on(removeFavoriteItem, (state, { favoriteItem }) => ({
    ...state,
    favorites: [
      ...state.favorites.filter(
        (item) => item.commonName !== favoriteItem.commonName
      ),
    ],
  }))
);
