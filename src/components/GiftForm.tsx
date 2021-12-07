import React from 'react';

interface GiftFormProps {
  onGiftSubmitted: Function;
}

interface Form extends HTMLFormElement {
  gift: HTMLInputElement;
}

function GiftForm({ onGiftSubmitted }: GiftFormProps) {
  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    const gift = e.currentTarget.gift.value;
    onGiftSubmitted(gift);
    e.currentTarget.gift.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="gift"
        className="mr-2 border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-offset-red-700"
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
