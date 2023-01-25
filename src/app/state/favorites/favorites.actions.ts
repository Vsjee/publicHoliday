import { createAction, props } from '@ngrx/store';
import { FavoriteInfo } from 'src/app/models';

export const addFavoriteItem = createAction(
  '[Favorite Countries] item was successfully added',
  props<{ favoriteItem: FavoriteInfo }>()
);

export const removeFavoriteItem = createAction(
  '[Favorite Countries] item was successfully removed',
  props<{ favoriteCountryName: string }>()
);
