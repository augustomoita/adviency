import React from 'react';
import { Gift } from '../types';
import Badge from './Badge';

type Props = {
  gift: Gift;
  onDelete: (gift: Gift) => void;
  onUpdate: (gift: Gift, qty: Gift['qty']) => void;
};

function GiftItem({ gift, onDelete, onUpdate }: Props) {
  const { name, qty, image } = gift;

  const handleUpdate = (quantity: number) => {
    onUpdate(gift, quantity);
  };

  return (
    <li className="my-1 flex justify-between items-center">
      <span className="flex items-center">
        <img src={image} alt={name} className="h-16 w-16 p-1" />
        <Badge qty={qty} onChange={handleUpdate} />
        {name}
      </span>
      <button
        type="button"
        className="mx-1 py-1 px-2 font-semibold rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600 h-1/2"
        onClick={() => onDelete(gift)}
      >
        X
      </button>
    </li>
  );
}

export default GiftItem;
