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

  function find(gift: Gift['name']): Gift | undefined {
    return gifts.find((item) => item.name === gift);
  }

  function add(gift: Gift['name'], qty: Gift['qty'], image: Gift['image']) {
    setGifts([
      ...gifts,
      {
        name: gift,
        qty,
        image,
      },
    ]);
  }

  function remove(gift: Gift) {
    setGifts(gifts.filter((item) => item.name !== gift.name));
  }

  function clean() {
    setGifts([]);
  }

  return { gifts, find, add, update, remove, clean };
};
