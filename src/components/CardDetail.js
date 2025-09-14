import React from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../data/cards';
import PriceChart from './PriceChart';

export default function CardDetail() {
  const { id } = useParams();
  const card = cards.find(c => c.id === Number(id));

  if (!card)
    return <p className="p-4 text-red-500 font-bold">Card not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{card.name}</h1>
      <p className="text-gray-700 mb-4">{card.edition}</p>
      <img
        src={card.image}
        alt={card.name}
        className="w-64 h-64 object-cover mb-6 rounded-md"
      />
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Stats</h2>
        <ul className="grid grid-cols-3 gap-4">
          {Object.entries(card.stats).map(([key, value]) => (
            <li key={key} className="bg-gray-100 p-2 rounded text-center">
              <span className="font-semibold">{key.toUpperCase()}</span>: {value}
            </li>
          ))}
        </ul>
      </div>
      <PriceChart prices={card.prices} />
    </div>
  );
}
