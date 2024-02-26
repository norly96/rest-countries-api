import { useContext, useEffect, useState } from "react"
import { CountryContext } from "../context/CountryContext"

const Search = ():JSX.Element => {
    const { setCountries } = useContext(CountryContext)
    const [search, setSearch] = useState('')

        useEffect(() => {           
        const handleSearchByName = async () => {
          try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
            const filteredCountries = await response.json();
            if (!response.ok) {
              throw new Error("Error en fetch");            
            }
            if(filteredCountries.length > 0){
                  setCountries(filteredCountries);
            }else{
                  setCountries([])
            }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        handleSearchByName();
}, [search, setCountries]); 


return (
    <div className='flex flex-row mb-8 sm:mb-0 items-center w-80 shadow-sm shadow-primary-light bg-element-light dark:bg-element-dark text-primary-light dark:text-primary-dark  text-xs sm:text-sm font-nunito rounded-lg py-4 px-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-gray dark:text-primary-dark w-4 h-4" viewBox="0 0 512 512"><path fill="currentColor" d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"/></svg>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="ml-3 rounded-lg placeholder:text-gray dark:placeholder:text-primary-dark focus:outline-none bg-element-light dark:bg-element-dark text-gray dark:text-primary-dark" placeholder="Search for a country"/>
    </div>
)
}

export default Search