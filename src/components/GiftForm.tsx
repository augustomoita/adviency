import React from 'react';
import { Gift } from '../types';
import Button from './Button';

type Props = {
  onGiftSubmitted: (
    gift: Gift['name'],
    qty: Gift['qty'],
    image: Gift['image'],
    receiver: Gift['receiver']
  ) => void;
  onCancel: () => void;
  error: string | null;
};

interface Form extends HTMLFormElement {
  gift: HTMLInputElement;
  qty: HTMLInputElement;
  image: HTMLInputElement;
  receiver: HTMLInputElement;
}

function GiftForm({ onGiftSubmitted, error, onCancel }: Props) {
  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    const gift = e.currentTarget.gift.value;
    const qty = +e.currentTarget.qty.value;
    const image = e.currentTarget.image.value;
    const receiver = e.currentTarget.receiver.value;
    if (gift && qty && image && receiver) {
      onGiftSubmitted(gift, qty, image, receiver);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-evenly">
      <h2 className="text-2xl">Agregar Regalo</h2>
      <input
        type="text"
        name="gift"
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Regalo"
      />
      <input
        type="text"
        name="receiver"
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Destinatario"
      />
      <input
        type="text"
        name="image"
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Imagen"
      />
      <input
        type="number"
        name="qty"
        min={1}
        defaultValue={1}
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        placeholder="Cantidad"
      />
      <div className="flex justify-evenly">
        <Button color="gray" tone={300} className="w-1/3" onClick={onCancel}>
          Cancelar
        </Button>
        <Button color="red" type="submit" className="w-1/3">
          Agregar
        </Button>
      </div>
      {error && <p className="mt-3 font-semibold text-red-500">{error}</p>}
    </form>
  );
}

export default GiftForm;
