import React from 'react';
import { useGift } from '../useGift';
import Button from './Button';

type Props = {
  onGiftSubmitted: (gift: Gift) => void;
  onCancel: () => void;
  error: string | null;
  data: Gift | null;
};

interface Form extends HTMLFormElement {
  gift: HTMLInputElement;
  qty: HTMLInputElement;
  image: HTMLInputElement;
  receiver: HTMLInputElement;
}

function GiftForm({ onGiftSubmitted, error, onCancel, data }: Props) {
  const { generateId } = useGift();
  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    const name = e.currentTarget.gift.value;
    const qty = +e.currentTarget.qty.value;
    const image = e.currentTarget.image.value;
    const receiver = e.currentTarget.receiver.value;
    if (name && qty && image && receiver) {
      const gift: Gift = {
        id: data ? data.id : generateId(),
        name,
        qty,
        image,
        receiver,
      };
      onGiftSubmitted(gift);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-evenly">
      <h2 className="text-2xl">Guardar Regalo</h2>
      <input
        type="text"
        name="gift"
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Regalo"
        defaultValue={data?.name}
      />
      <input
        type="text"
        name="receiver"
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Destinatario"
        defaultValue={data?.receiver}
      />
      <input
        type="text"
        name="image"
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        required
        placeholder="Imagen"
        defaultValue={data?.image}
      />
      <input
        type="number"
        name="qty"
        min={1}
        defaultValue={data?.qty || 1}
        className="my-3 border-gray-500 focus:border-gray-500 focus:ring-transparent focus:ring-offset-transparent"
        placeholder="Cantidad"
      />
      <div className="flex justify-evenly">
        <Button color="gray" tone={300} className="w-1/3" onClick={onCancel}>
          Cancelar
        </Button>
        <Button color="red" type="submit" className="w-1/3">
          Guardar
        </Button>
      </div>
      {error && <p className="mt-3 font-semibold text-red-500">{error}</p>}
    </form>
  );
}

export default GiftForm;
