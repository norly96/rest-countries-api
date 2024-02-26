import CountryList from "./Country/CountryList";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../context/CountryContext";

const Home  = ():JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { setCountries } = useContext(CountryContext);

    useEffect(() => {
      if (loading) {
        const getAllCountries = async () => {
          try {
            const response = await fetch(
              "https://restcountries.com/v3.1/all"
            );
            if (response.ok) {
              const country = await response.json();
              setCountries(country);
              setError(null);
              setLoading(false);
            } else {
              setError("Failed to fetch data");
            }
          } catch (error) {
            setError(`Error fetching data: ${error}`);
          }
        };
    
        getAllCountries();
      }
    }, [loading]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl">{error}</h1>
      </div>
    );
  }

  return (
    <>
    <section className="flex flex-col sm:flex-row justify-between px-8 sm:px-10 my-9">
      <Search/>
      <Dropdown />
    </section>     
      <section className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 px-8 justify-center">
        <CountryList/>
      </section>
    </>
  );
};

export default Home;
