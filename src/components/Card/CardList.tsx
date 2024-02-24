import React, { useState } from 'react'
import { ICard } from '../../types/type'
import CardItem from './CardItem'


const initialCards = [
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "China",
    population: "6",
    region: "Asia",
    capital: "Pekin",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "Japon",
    population: "5",
    region: "Asia",
    capital: "Tokio",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "USA",
    population: "5",
    region: "America",
    capital: "Washington",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "Spain",
    population: "4",
    region: "Europe",
    capital: "Madrid",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "Angola",
    population: "3",
    region: "Africa",
    capital: "Luanda",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "Australia",
    population: "2",
    region: "Oceania",
    capital: "Sydney",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "Germany",
    population: "3",
    region: "Europe",
    capital: "Berlin",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "Guinea",
    population: "2",
    region: "Africa",
    capital: "ni idea",
},

]

const CardList = () => {
    const [cardss, setCards] = useState<ICard[]>(initialCards)
  return (
    <>
        {
            cardss.map( (c) => (
                <CardItem cards={c}/>
            ))
        }
    </>
  )
}

export default CardList