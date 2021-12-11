import React from 'react';
import { Gift } from '../types';
import Badge from './Badge';
import Button from './Button';

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
        <p className="text-lg font-medium mx-2">{name}</p>
      </span>
      <span className="flex items-center">
        <Badge qty={qty} onChange={handleUpdate} />
        <Button className="mx-1" color="red" onClick={onDelete}>
          X
        </Button>
      </span>
    </li>
  );
}

export default GiftItem;
