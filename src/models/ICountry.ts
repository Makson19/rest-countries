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
      fra: {
        common: string,
        official: string
      }
    },
    official: string,
  };
  population: number;
  region: string;
}
