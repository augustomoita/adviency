import React from 'react';
import { Gift } from '../types';
import Badge from './Badge';

type Props = {
  gift: Gift;
  handleDelete: (gift: Gift) => void;
  handleUpdate: (gift: Gift, qty: Gift['qty']) => void;
};

function GiftItem({ gift, handleDelete, handleUpdate }: Props) {
  const { name, qty, image } = gift;

  const onUpdate = (quantity: number) => {
    handleUpdate(gift, quantity);
  };

  return (
    <li className="my-1 flex justify-between items-center">
      <span className="flex items-center">
        <img src={image} alt={name} className="h-16 w-16 p-1" />
        <Badge qty={qty} handleUpdate={onUpdate} />
        {name}
      </span>
      <button
        type="button"
        className="mx-1 py-1 px-2 font-semibold rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600 h-1/2"
        onClick={() => handleDelete(gift)}
      >
        X
      </button>
    </li>
  );
}

export default GiftItem;
