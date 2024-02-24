import React from "react";
import { ICard } from "../../types/type";

interface Props {
  cards: ICard;
}

const CardItem = ({ cards }: Props) => {
  return (
    <div className="flex flex-col mb-10 overflow-hidden max-w-sm rounded-lg shadow-lg text-primary-light dark:text-primary-dark">
      <img src={cards.image} alt="" className="object-cover" />
      <div className="ml-3 mb-9">
        <h1 className="text-lg font-extrabold mt-4 mb-2">{cards.name}</h1>
        <h2 className="text-sm font-semibold">
          Population: <span className="font-light">{cards.population}</span>
        </h2>
        <h2 className="text-sm font-semibold">
          Region: <span className="font-light">{cards.region}</span>
        </h2>
        <h2 className="text-sm font-semibold">
          Capital: <span className="font-light">{cards.capital}</span>
        </h2>
      </div>
    </div>
  );
};

export default CardItem;
