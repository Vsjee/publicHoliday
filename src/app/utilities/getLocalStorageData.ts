import { key } from '../components';
import { FavoriteInfo } from '../models';

export const getLocalStorageData = (): FavoriteInfo[] => {
  const getLocalData = localStorage.getItem(key);
  const parseLocalData: FavoriteInfo[] =
    getLocalData !== null ? JSON.parse(getLocalData) : [];
  return parseLocalData;
};
