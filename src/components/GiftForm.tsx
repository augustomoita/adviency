import React from 'react';
import { Gift } from '../types';
import Button from './Button';

type Props = {
  onGiftSubmitted: (
    gift: Gift['name'],
    qty: Gift['qty'],
    image: Gift['image']
  ) => void;
  error: string | null;
};

interface Form extends HTMLFormElement {
  gift: HTMLInputElement;
  qty: HTMLInputElement;
  image: HTMLInputElement;
}

function GiftForm({ onGiftSubmitted, error }: Props) {
  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    const gift = e.currentTarget.gift.value;
    const qty = +e.currentTarget.qty.value;
    const image = e.currentTarget.image.value;
    if (gift && qty && image) {
      onGiftSubmitted(gift.toUpperCase(), qty, image);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="gift"
        className="mr-2 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Regalo"
      />
      <input
        type="text"
        name="image"
        className="mr-2 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Imagen"
      />
      <input
        type="number"
        name="qty"
        min={1}
        defaultValue={1}
        className="mr-2 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent w-16"
        placeholder="Cantidad"
      />
      <Button color="red">Agregar</Button>
      {error && <p className="mt-3 font-semibold text-red-500">{error}</p>}
    </form>
  );
}

export default GiftForm;
