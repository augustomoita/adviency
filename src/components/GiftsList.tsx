import React from 'react';
import { Gift } from '../types';
import GiftItem from './GiftItem';

type Props = {
  gifts: Gift[];
  handleDelete: (gift: Gift) => void;
  handleDeleteAll: () => void;
};

function GiftsList({ gifts, handleDelete, handleDeleteAll }: Props) {
  return (
    <div className="pt-3">
      <ul>
        {gifts.map((gift: Gift, index) => (
          <GiftItem key={index} gift={gift} handleDelete={handleDelete} />
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
        <p>No hay regalos, agrega alguno!</p>
      )}
    </div>
  );
}

export default GiftsList;
