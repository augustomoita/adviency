import React from 'react';
import { IGift } from '../types';

type Props = {
  gifts: IGift[];
  handleDelete: (gift: IGift['gift']) => void;
  handleDeleteAll: () => void;
};

function GiftsList({ gifts, handleDelete, handleDeleteAll }: Props) {
  return (
    <div className="pt-3">
      <ul>
        {gifts.map(({ gift, qty }: IGift, index) => (
          <li key={index} className="my-1">
            {qty} x {gift}
            <button
              type="button"
              className="mx-1 py-1 px-2 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
              onClick={() => handleDelete(gift)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {gifts.length > 0 ? (
        <button
          type="button"
          className="mt-6 py-1 px-3 rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600"
          onClick={() => handleDeleteAll()}
        >
          Borrar todo
        </button>
      ) : (
        <p>Agrega regalos</p>
      )}
    </div>
  );
}

export default GiftsList;
