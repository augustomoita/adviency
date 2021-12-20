import React from 'react';
import GiftItemSimple from './GiftItemSimple';

type Props = {
  gifts: Gift[];
};

function GiftsListSimple({ gifts }: Props) {
  return (
    <div className="pt-3">
      <ul>
        {gifts.map((gift: Gift) => (
          <GiftItemSimple key={gift.id} gift={gift} />
        ))}
      </ul>
    </div>
  );
}

export default GiftsListSimple;
