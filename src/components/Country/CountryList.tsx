import { useContext } from 'react'
import CountryItem from './CountryItem'
import { CountryContext } from '../../context/CountryContext'

const CountryList = () => {
    const { countries } = useContext(CountryContext)
   
  return (
    <>
        {
            countries?.map( (country) => (
                <CountryItem country={country} key={country.cca2}/>
            ))
        }
    </>
  )
}

export default CountryList