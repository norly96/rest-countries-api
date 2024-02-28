import { Link } from "react-router-dom";
import { ICountry } from "../../types/type";

interface Props {
  country: ICountry;
  key: string
}

const CountryItem = ({ country }: Props):JSX.Element => {
  const formatterPop = new Intl.NumberFormat("us-US")
  return (
    <div key={country.name.common} className="flex flex-col mb-10  bg-element-light dark:bg-element-dark overflow-hidden max-w-sm rounded-lg shadow-sm shadow-primary-light text-primary-light dark:text-primary-dark">
      <Link to={`${country.cca3}`}>
      <img src={country.flags.png} alt={country.name.common} className="object-fill w-96 h-48 sm:w-64 sm:h-44 lg:w-96 lg:h-52 " />
      <div className="ml-3 mb-9">
        <h1 className="text-lg font-extrabold mt-4 mb-2">{country.name.common}</h1>
        <h2 className="text-sm font-semibold">
          Population: <span className="font-light">{formatterPop.format(country.population)}</span>
        </h2>
        <h2 className="text-sm font-semibold">
          Region: <span className="font-light">{country.region}</span>
        </h2>
        <h2 className="text-sm font-semibold">
          Capital: <span className="font-light">{country.capital}</span>
        </h2>
      </div>
      </Link>
    </div>
  );
};

export default CountryItem;
