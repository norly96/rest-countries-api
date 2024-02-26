import { createContext } from "react";
import { ICountry } from "../types/type";

interface CountryContextType {
    countries: ICountry[];
    setCountries: React.Dispatch<React.SetStateAction<[]>>;
  }

export const CountryContext = createContext<CountryContextType>({
    countries: [],
    setCountries: () => {},
  });

