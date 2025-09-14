import React from 'react';
import { Link } from 'react-router-dom';
import { cards } from '../data/cards';

export default function CardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map(card => (
        <Link key={card.id} to={`/detail/${card.id}`}>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-200">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-2 font-bold text-lg">{card.name}</h2>
            <p className="text-sm text-gray-600">{card.edition}</p>
            <p className="mt-1 font-medium">OVR: {card.overall}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
