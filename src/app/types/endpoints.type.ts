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

export interface CountryHolidaysData {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null;
  launchYear: null;
  types: string[];
}
