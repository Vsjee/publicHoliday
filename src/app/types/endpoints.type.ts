export interface AvailableCountriesInfo {
  countryCode: string;
  name: string;
}

export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: [
    {
      commonName: string;
      officialName: string;
      countryCode: string;
      region: string;
      borders: null;
    }
  ];
}
