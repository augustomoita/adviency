import React from 'react';
import { Gift } from '../types';

type Props = {
  gift: Gift;
  handleDelete: (gift: Gift) => void;
};

function GiftItem({ gift, handleDelete }: Props) {
  const { name, qty } = gift;
  return (
    <li className="my-1 flex justify-between">
      <span>
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-sm font-bold leading-none text-white bg-green-600 rounded-full">
          {qty}
        </span>
        {name}
      </span>
      <button
        type="button"
        className="mx-1 py-1 px-2 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
        onClick={() => handleDelete(gift)}
      >
        X
      </button>
    </li>
  );
}

export default GiftItem;
