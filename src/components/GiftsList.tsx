import React from 'react';
import Button from './Button';
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
        {gifts.map((gift: Gift) => (
          <GiftItem
            key={gift.id}
            gift={gift}
            onDelete={() => onDeleteItem(gift)}
            onQtyChange={(quantity: number) => onUpdateItem(gift, quantity)}
          />
        ))}
      </ul>
      {gifts.length > 0 ? (
        <Button className="mt-6" color="red" tone={300} onClick={onDeleteAll}>
          Borrar todo
        </Button>
      ) : (
        <p>No hay regalos, agrega alguno!</p>
      )}
    </div>
  );
}

export default GiftsList;
