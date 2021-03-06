import React from 'react';
import Counter from './Counter';
import Button from './Button';
import { formatPrice } from '../utils';

type Props = {
  gift: Gift;
  onDelete: () => void;
  onQtyChange: (qty: Gift['qty']) => void;
  onSelect: () => void;
  onDuplicate: () => void;
};

function GiftItem({
  gift,
  onDelete,
  onQtyChange,
  onSelect,
  onDuplicate,
}: Props) {
  const { name, qty, image, receiver, price } = gift;
  const total = price * qty;

  const handleUpdate = (quantity: number) => {
    if (qty + quantity > 0) {
      onQtyChange(quantity);
    }
  };

  return (
    <li className="flex justify-between items-center my-2 py-2 px-2 border-2 shadow-sm hover:shadow-md">
      <span className="flex items-center">
        <img src={image} alt={name} className="h-20 w-20 p-1" />
        <div className="text-left">
          <p className="uppercase text-lg font-medium mx-2">{name}</p>
          <p className="capitalize text-sm text-gray-400 mx-2">{receiver}</p>
        </div>
      </span>
      <span className="flex items-center">
        <p className="uppercase text-lg font-medium mx-2">
          {formatPrice(total)}
        </p>
        <Counter qty={qty} onChange={handleUpdate} />
        <Button className="mx-1" color="green" onClick={onSelect}>
          ✏️
        </Button>
        <Button className="mx-1" color="blue" onClick={onDuplicate}>
          📑
        </Button>
        <Button className="mx-1" color="red" onClick={onDelete}>
          X
        </Button>
      </span>
    </li>
  );
}

export default GiftItem;
