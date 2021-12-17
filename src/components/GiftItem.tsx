import React from 'react';
import Counter from './Counter';
import Button from './Button';

type Props = {
  gift: Gift;
  onDelete: () => void;
  onQtyChange: (qty: Gift['qty']) => void;
  onSelect: () => void;
};

function GiftItem({ gift, onDelete, onQtyChange, onSelect }: Props) {
  const { name, qty, image, receiver, price } = gift;
  const total = price * qty;

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(value);

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
          <p className="uppercase text-lg font-medium mx-2">
            {name} - {formatPrice(total)}
          </p>
          <p className="capitalize text-sm text-gray-400 mx-2">{receiver}</p>
        </div>
      </span>
      <span className="flex items-center">
        <Counter qty={qty} onChange={handleUpdate} />
        <Button className="mx-1" color="green" onClick={onSelect}>
          ✏️
        </Button>
        <Button className="mx-1" color="red" onClick={onDelete}>
          X
        </Button>
      </span>
    </li>
  );
}

export default GiftItem;
