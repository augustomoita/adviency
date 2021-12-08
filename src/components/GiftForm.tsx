import React from 'react';
import { IGift } from '../types';

type Props = {
  onGiftSubmitted: (gift: IGift['gift'], qty: IGift['qty']) => void;
};

interface Form extends HTMLFormElement {
  gift: HTMLInputElement;
  qty: HTMLInputElement;
}

function GiftForm({ onGiftSubmitted }: Props) {
  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    const gift = e.currentTarget.gift.value;
    const qty = +e.currentTarget.qty.value;
    if (gift) {
      onGiftSubmitted(gift.toUpperCase(), qty);
      e.currentTarget.gift.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="gift"
        className="mr-2 border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-offset-red-700"
      />
      <input
        type="number"
        name="qty"
        min={1}
        defaultValue={1}
        className="mr-2 border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-offset-red-700 w-16"
      />
      <button
        type="submit"
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
      >
        Agregar
      </button>
    </form>
  );
}

export default GiftForm;
