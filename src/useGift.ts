import { useState } from 'react';
import { Gift } from './types';

export const useGift = () => {
  const storedGifts = localStorage.getItem('gifts') || '[]';

  const [gifts, setGifts] = useState<Gift[]>(JSON.parse(storedGifts));

  function update(gift: Gift['gift'], qty: Gift['qty']) {
    const updatedGifts = gifts.map((item) =>
      item.gift === gift
        ? {
            ...item,
            qty: item.qty + qty,
          }
        : item
    );
    save(updatedGifts);
  }

  function add(gift: Gift['gift'], qty: Gift['qty']) {
    const exists = gifts.find((item) => item.gift === gift);

    if (exists) {
      update(exists.gift, qty);
      return;
    }

    const updatedGifts = [
      ...gifts,
      {
        gift,
        qty,
      },
    ];
    save(updatedGifts);
  }

  function remove(gift: Gift['gift']) {
    const updatedGifts = gifts.filter((item) => item.gift !== gift);
    save(updatedGifts);
  }

  function clean() {
    save([]);
  }

  function save(giftsToSave: Gift[]) {
    setGifts(giftsToSave);
    localStorage.setItem('gifts', JSON.stringify(giftsToSave));
  }

  return { gifts, add, remove, clean };
};
