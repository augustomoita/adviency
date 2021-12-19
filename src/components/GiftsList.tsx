import React from 'react';
import { formatPrice } from '../utils';
import Button from './Button';
import GiftItem from './GiftItem';
import Loader from './Loader';

type Props = {
  gifts: Gift[];
  loading: boolean;
  onDeleteItem: (gift: Gift) => void;
  onDeleteAll: () => void;
  onUpdateItem: (gift: Gift, qty: Gift['qty']) => void;
  onSelectItem: (gift: Gift) => void;
  onDuplicateItem: (gift: Gift) => void;
};

function GiftsList({
  gifts,
  loading,
  onDeleteItem,
  onDeleteAll,
  onUpdateItem,
  onSelectItem,
  onDuplicateItem,
}: Props) {
  const total: number = gifts.reduce(
    (acc, cur) => acc + cur.qty * cur.price,
    0
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="pt-3">
      <ul>
        {gifts.map((gift: Gift) => (
          <GiftItem
            key={gift.id}
            gift={gift}
            onDelete={() => onDeleteItem(gift)}
            onQtyChange={(quantity: number) => onUpdateItem(gift, quantity)}
            onSelect={() => onSelectItem(gift)}
            onDuplicate={() => onDuplicateItem(gift)}
          />
        ))}
      </ul>
      {gifts.length > 0 ? (
        <>
          <p>Total: {formatPrice(total)}</p>
          <Button className="mt-6" color="red" tone={300} onClick={onDeleteAll}>
            Borrar todo
          </Button>
        </>
      ) : (
        <p>No hay regalos, agrega alguno!</p>
      )}
    </div>
  );
}

export default GiftsList;
