import { useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { CountryContext } from "../../context/CountryContext";
import { ICountry } from "../../types/type";

const CountryDetails = () => {
    const { countries } = useContext(CountryContext)
    const { cod } = useParams();
    //const initialCountry = countries.find((e) => e.cca3 === String(cod))
    
    const [coun, setcoun] = useState<ICountry>()
    //const oneCountry = countries.find((e) => e.cca3 === String(cod)); 
    //const langCountry =  oneCountry?.languages?.map(()=>)
    //console.log(Object.values(oneCountry?.currencies)[0].name);
    //The Intl.NumberFormat object enables language-sensitive number formatting.
    //I used it to separate the thousands by point
    const formatterPop = new Intl.NumberFormat("us-US")

    const convert = (code:string) => { return  countries.find((c)=> c.cca3 === String(code))}

    useEffect(() => {
      const savedCountry = localStorage.getItem(`country_${cod}`);
      if (savedCountry) {
        setcoun(JSON.parse(savedCountry));
      } else {
          const foundCountry = countries.find((e) => e.cca3 === String(cod));
          if (foundCountry) {
            setcoun(foundCountry);
          }
      }
  }, [cod, countries]);

  useEffect(() => {
      if (coun) {
          localStorage.setItem(`country_${cod}`, JSON.stringify(coun));
      }
  }, [cod, coun]);

  return (
    <section className="flex flex-col mx-9 lg:mx-40 my-9">
      <Link to={'/'} className="flex flex-row items-center w-28 rounded-lg mb-10 py-2 px-2 font-nunito text-sm lg:text-base text-primary-light dark:text-primary-dark bg-element-light dark:bg-element-dark shadow-sm shadow-primary-light"><span><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-2 ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg></span>Back</Link>
      <div className="font-semibold xl:flex xl:flex-row">
        
      <img src={coun?.flags.png} alt={coun?.flags.alt} className="object-fill mr-10 w-80 h-48 lg:w-[36rem] lg:h-80 xl:w-[50rem] xl:h-[30rem]"/> 
      <div className="flex flex-col xl:justify-center">
      <h1 className="text-xl xl:text-2xl my-4 text-primary-light dark:text-primary-dark" >{coun?.name.common}</h1>
        <div className="flex flex-col xl:flex-row xl:gap-5 ">
        <div>
        
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Native Name: <span className="font-light">
          {coun?.name.nativeName && Object.values(coun.name.nativeName)[0] && Object.values(Object.values(coun.name.nativeName)[0])[0] }
          </span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Population: <span className="font-light">{formatterPop.format(coun?.population || 0) }</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Region: <span className="font-light">{coun?.region}</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Sub Region: <span className="font-light">{coun?.subregion}</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 mb-4 dark:text-primary-dark">Capital: <span className="font-light">{coun?.capital}</span></h2>
        </div>
        <div>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Top Level Domain: <span className="font-light">{coun?.tld}</span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Currencies: <span className="font-light">
          {coun?.currencies && Object.values(coun?.currencies)[0]?.name }
          </span></h2>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Languages: <span className="font-light">{ coun?.languages && Object.values(coun.languages).join(', ')}</span></h2>
        </div>
        </div>
        <h2 className="xl:text-lg text-primary-light text-sm py-0.5 dark:text-primary-dark">Borders Countries: 
            <div className="flex flex-row flex-wrap">
              {coun?.borders ? coun.borders.map((b,index)=> <span className="py-2 px-2 rounded-lg m-2 font-light shadow-sm shadow-primary-light" key={index}>{convert(b)?.name.common}</span>) : <div className="text-sm xl:text-xl text-primary-light dark:text-primary-dark font-light"> It has no border countries</div> }
            </div>
        </h2>
      </div>
      </div>
        
        
    </section>
  )
}

export default CountryDetails