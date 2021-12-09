import { useEffect, useState } from 'react';
import { Gift } from './types';

export const useGift = () => {
  const storedGifts = localStorage.getItem('gifts') || '[]';

  const [gifts, setGifts] = useState<Gift[]>(JSON.parse(storedGifts));

  useEffect(() => {
    return localStorage.setItem('gifts', JSON.stringify(gifts));
  }, [gifts]);

  function update(gift: Gift['gift'], qty: Gift['qty']) {
    setGifts(
      gifts.map((item) =>
        item.gift === gift
          ? {
              ...item,
              qty: item.qty + qty,
            }
          : item
      )
    );
  }

  function add(gift: Gift['gift'], qty: Gift['qty']) {
    const exists = gifts.find((item) => item.gift === gift);

    if (exists) {
      update(exists.gift, qty);
      return;
    }

    setGifts([
      ...gifts,
      {
        gift,
        qty,
      },
    ]);
  }

  function remove(gift: Gift['gift']) {
    setGifts(gifts.filter((item) => item.gift !== gift));
  }

  function clean() {
    setGifts([]);
  }

  return { gifts, add, remove, clean };
};
