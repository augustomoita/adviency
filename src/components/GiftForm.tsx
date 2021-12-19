import React, { useEffect, useRef } from 'react';
import { useGift } from '../useGift';
import Button from './Button';
import suggestedGifts from '../suggestedGifts.json';

type Props = {
  onGiftSubmitted: (gift: Gift) => void;
  onCancel: () => void;
  error: string | null;
  data: Gift | null;
  focus: boolean;
};

interface Form extends HTMLFormElement {
  gift: HTMLInputElement;
  qty: HTMLInputElement;
  image: HTMLInputElement;
  receiver: HTMLInputElement;
}

function GiftForm({ onGiftSubmitted, error, onCancel, data, focus }: Props) {
  const { generateId } = useGift();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      inputRef.current?.focus();
    }
  }, [focus]);

  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    const name = e.currentTarget.gift.value;
    const price = +e.currentTarget.price.value;
    const qty = +e.currentTarget.qty.value;
    const image = e.currentTarget.image.value;
    const receiver = e.currentTarget.receiver.value;
    if (name && qty && image && receiver && price) {
      const gift: Gift = {
        id: data && data.id ? data.id : generateId(),
        name,
        qty,
        image,
        receiver,
        price,
      };
      onGiftSubmitted(gift);
      e.currentTarget.reset();
    }
  };

  const handleRandomGift = () => {
    const randomIndex = Math.floor(Math.random() * suggestedGifts.length);
    const suggestedGift = suggestedGifts[randomIndex];
    inputRef.current && (inputRef.current.value = suggestedGift);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-evenly">
      <h2 className="text-2xl">
        {data ? 'Modificar Regalo' : 'Agregar Regalo'}
      </h2>
      <div className="flex justify-between items-center">
        <input
          type="text"
          name="gift"
          className="my-3 border-green-700 focus:border-green-700 focus:ring-green-700 focus:ring-offset-transparent w-2/3"
          required
          placeholder="Regalo"
          defaultValue={data?.name}
          ref={inputRef}
        />
        <Button tone={400} onClick={handleRandomGift}>
          Sorprendeme!
        </Button>
      </div>
      <input
        type="number"
        name="price"
        min={0.01}
        step={0.01}
        defaultValue={data?.price}
        className="my-3 border-green-700 focus:border-green-700 focus:ring-green-700 focus:ring-offset-transparent"
        placeholder="Precio"
      />
      <input
        type="text"
        name="receiver"
        className="my-3 border-green-700 focus:border-green-700 focus:ring-green-700 focus:ring-offset-transparent"
        required
        placeholder="Destinatario"
        defaultValue={data?.receiver}
      />
      <input
        type="text"
        name="image"
        className="my-3 border-green-700 focus:border-green-700 focus:ring-green-700 focus:ring-offset-transparent"
        required
        placeholder="Imagen"
        defaultValue={data?.image}
      />
      <input
        type="number"
        name="qty"
        min={1}
        defaultValue={data?.qty || 1}
        className="my-3 border-green-700 focus:border-green-700 focus:ring-green-700 focus:ring-offset-transparent"
        placeholder="Cantidad"
      />
      <div className="flex justify-evenly">
        <Button color="red" className="w-1/3" onClick={onCancel}>
          Cancelar
        </Button>
        <Button color="green" type="submit" className="w-1/3">
          {data ? 'Guardar' : 'Agregar'}
        </Button>
      </div>
      {error && <p className="mt-3 font-semibold text-red-500">{error}</p>}
    </form>
  );
}

export default GiftForm;
