export const getLocalStorageData = (key: string) => {
  const getLocalData = localStorage.getItem(key);
  const parseLocalData = getLocalData !== null ? JSON.parse(getLocalData) : [];
  return parseLocalData;
};
