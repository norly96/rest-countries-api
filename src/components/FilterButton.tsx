import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';

interface Props {
    click: ()=> void,
    region: string
}

const FilterButton = ({ click,region }: Props) => {
  const { setCountries } = useContext(CountryContext);

  const handleFilterByRegion = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const filteredCountries = await response.json();
      setCountries(filteredCountries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterComplete = () => {
    click();
    handleFilterByRegion()
  }

  return (
    <>
      <button onClick={handleFilterComplete} className='flex justify-start py-0.5'>{region}</button>
    </>
  );
};

export default FilterButton;
