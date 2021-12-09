import { useEffect, useState } from 'react';
import { Gift } from './types';

export const useGift = () => {
  const storedGifts = localStorage.getItem('gifts') || '[]';

  const [gifts, setGifts] = useState<Gift[]>(JSON.parse(storedGifts));

  useEffect(() => {
    return localStorage.setItem('gifts', JSON.stringify(gifts));
  }, [gifts]);

  function update(gift: Gift, qty: Gift['qty']) {
    setGifts(
      gifts.map((item) =>
        item.name === gift.name
          ? {
              ...item,
              qty: item.qty + qty,
            }
          : item
      )
    );
  }

  function add(gift: Gift['name'], qty: Gift['qty']) {
    const exists = gifts.find((item) => item.name === gift);

    if (exists) {
      update(exists, qty);
      return;
    }

    setGifts([
      ...gifts,
      {
        name: gift,
        qty,
      },
    ]);
  }

  function remove(gift: Gift) {
    setGifts(gifts.filter((item) => item.name !== gift.name));
  }

  function clean() {
    setGifts([]);
  }

  return { gifts, add, remove, clean };
};
