import React from 'react';
import { Gift } from '../types';
import Badge from './Badge';

type Props = {
  gift: Gift;
  onDelete: () => void;
  onQtyChange: (qty: Gift['qty']) => void;
};

function GiftItem({ gift, onDelete, onQtyChange }: Props) {
  const { name, qty, image } = gift;

  const handleUpdate = (quantity: number) => {
    if (qty + quantity > 0) {
      onQtyChange(quantity);
    }
  };

  return (
    <li className="flex justify-between items-center my-2 py-2 px-2 border-2 shadow-sm hover:shadow-md">
      <span className="flex items-center">
        <img src={image} alt={name} className="h-16 w-16 p-1" />
        <Badge qty={qty} onChange={handleUpdate} />
        <p className="text-lg font-medium">{name}</p>
      </span>
      <button
        type="button"
        className="mx-1 py-1 px-2 font-semibold rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600 h-1/2"
        onClick={onDelete}
      >
        X
      </button>
    </li>
  );
}

export default GiftItem;
