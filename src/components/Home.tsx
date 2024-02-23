import React from 'react'
import search from '../assets/search-sharp.svg'
import CardList from './Card/CardList'

const Home = () => {
  return (
    <>
    <section className='flex flex-row justify-between px-8 sm:px-10'>
        <div className='flex flex-row items-center'>
            <img src={search} alt="" className='w-4 h-4'/>
            <input type="text" className='sm:text-sm' placeholder="Search for a country"/>
        </div>
        <div>
        
        <select className='relative z-20 py-[10px] px-5 outline-none disabled:cursor-default disabled:bg-gray-2'>
          <option value='' selected disabled>Filter by Region</option>
          <option value='' >All</option>
          <option value='' >Africa</option>
          <option value='' >America</option>
          <option value='' >Asia</option>
          <option value='' >Europe</option>
          <option value='' >Oceania</option>
        </select>

        </div>
    </section>
    <section className='grid gap-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 px-8 justify-center'>
      <CardList/>
    </section>
    </>
  )
}

export default Home