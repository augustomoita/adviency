import React from 'react';
import { Gift } from '../types';
import GiftItem from './GiftItem';

type Props = {
  gifts: Gift[];
  onDeleteItem: (gift: Gift) => void;
  onDeleteAll: () => void;
  onUpdateItem: (gift: Gift, qty: Gift['qty']) => void;
};

function GiftsList({ gifts, onDeleteItem, onDeleteAll, onUpdateItem }: Props) {
  return (
    <div className="pt-3">
      <ul>
        {gifts.map((gift: Gift, index) => (
          <GiftItem
            key={index}
            gift={gift}
            onDelete={() => onDeleteItem(gift)}
            onQtyChange={(quantity: number) => onUpdateItem(gift, quantity)}
          />
        ))}
      </ul>
      {gifts.length > 0 ? (
        <button
          type="button"
          className="mt-6 py-1 px-3 rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600"
          onClick={onDeleteAll}
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
