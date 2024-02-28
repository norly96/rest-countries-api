import { useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { CountryContext } from "../../context/CountryContext";
import { ICountry } from "../../types/type";

const CountryDetails = () => {
    const { countries } = useContext(CountryContext)
    const { cod } = useParams();    
    const [country, setCountry] = useState<ICountry>()
    //The Intl.NumberFormat object enables language-sensitive number formatting.
    //I used it to separate the thousands by point
    const formatterPop = new Intl.NumberFormat("us-US")

    const convert = (code:string) => { return countries.find((c)=> c.cca3 === String(code))}

    useEffect(() => {
      const savedCountry = localStorage.getItem(`country_${cod}`);
      if (savedCountry) {
        setCountry(JSON.parse(savedCountry));
      } else {
          const foundCountry = countries.find((e) => e.cca3 === String(cod));
          if (foundCountry) {
            setCountry(foundCountry);
          }
      }
  }, [cod, countries]);

  useEffect(() => {
      if (country) {
          localStorage.setItem(`country_${cod}`, JSON.stringify(country));
      }
  }, [cod, country]);

  return (
    <section className="flex flex-col mx-9 lg:mx-40 my-9">
      <Link to={'/'} className="flex flex-row items-center w-28 rounded-lg mb-10 py-2 px-2 font-nunito text-sm lg:text-base text-primary-light dark:text-primary-dark bg-element-light dark:bg-element-dark shadow-sm shadow-primary-light"><span><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-2 ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg></span>Back</Link>
      <div className="font-semibold xl:flex xl:flex-row">
        
      <img src={country?.flags.png} alt={country?.name.common} className="object-fill mr-10 w-80 h-48 lg:w-[36rem] lg:h-80 xl:w-[50rem] xl:h-[30rem]"/> 
      <div className="flex flex-col xl:justify-center">
      <h1 className="text-xl xl:text-2xl my-4 text-primary-light dark:text-primary-dark" >{country?.name.common}</h1>
        <div className="flex flex-col xl:flex-row xl:gap-5 ">
        <div>
        
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Native Name: <span className="font-light">
          {country?.name.nativeName && Object.values(country.name.nativeName)[0] && Object.values(Object.values(country.name.nativeName)[0])[0] }
          </span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Population: <span className="font-light">{formatterPop.format(country?.population || 0) }</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Region: <span className="font-light">{country?.region}</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Sub Region: <span className="font-light">{country?.subregion}</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 mb-4 dark:text-primary-dark">Capital: <span className="font-light">{country?.capital}</span></h2>
        </div>
        <div>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Top Level Domain: <span className="font-light">{country?.tld}</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Currencies: <span className="font-light">
          {country?.currencies && Object.values(country?.currencies)[0]?.name }
          </span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Languages: <span className="font-light">{ country?.languages && Object.values(country.languages).join(', ')}</span></h2>
        </div>
        </div>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Borders Countries: 
            <div className="flex flex-row flex-wrap">
              {country?.borders ? country.borders.map((b,index)=> <span className="py-2 px-2 rounded-lg m-2 font-light shadow-sm shadow-primary-light" key={index}>{convert(b)?.name.common}</span>) : <div className="text-sm xl:text-xl text-primary-light dark:text-primary-dark font-light"> It has no border countries</div> }
            </div>
        </h2>
      </div>
      </div>
        
        
    </section>
  )
}

export default CountryDetails