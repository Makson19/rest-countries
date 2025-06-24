export interface ICountry {
  capital: string[];
  flags: {
    alt: string,
    png: string,
    svg: string
  };
  name: {
    common: string,
    nativeName: {
      [key: string]: {
        common: string,
        official: string
      }
    },
    official: string,
  };
  population: number;
  region: string;
}

type Keys = 'ara' | 'bre' | 'ces' | 'cym' | 'deu' | 'est' | 'fin' | 'fra' | 'hrv' | 'hun' | 'ind' | 'ita' | 'jpn' | 'kor' | 'nld' | 'per' | 'pol' | 'por' | 'rus' | 'slk' | 'spa' | 'srp' | 'swe' | 'tur' | 'urd' | 'zho'

export interface ICountryInfo extends ICountry {
  altSpellings: string[];
  area: number;
  borders: string[];
  capitalInfo: { latlnng: number[] };
  car: {
    side: string,
    signs: string[]
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string,
    svg: string
  };
  continents: string[];
  currencies: {
    EUR: { symbol: string, name: string }
  };
  demonyms: {
    eng: { f: string, m: string },
    fra: { f: string, m: string }
  };
  fifa: string;
  flag: string;
  gini: { 2018: number };
  idd: {
    root: string,
    suffixes: string[]
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    deu: string,
    fra: string,
    nld: string
  };
  latlng: number[];
  maps: {
    googleMaps: string,
    openStreetMaps: string
  };
  postalCode: {
    format: string,
    regex: string
  };
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key in Keys]: { official: string, common: string }
  };
  unMember: boolean;
}
