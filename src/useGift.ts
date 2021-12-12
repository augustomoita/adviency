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
        item.id === gift.id
          ? {
              ...item,
              qty: item.qty + qty,
            }
          : item
      )
    );
  }

  function get(
    gift: Gift['name'],
    receiver: Gift['receiver']
  ): Gift | undefined {
    return gifts.find(
      (item) =>
        item.name.toLowerCase() === gift.toLowerCase() &&
        item.receiver.toLowerCase() === receiver.toLowerCase()
    );
  }

  function add(
    gift: Gift['name'],
    qty: Gift['qty'],
    image: Gift['image'],
    receiver: Gift['receiver']
  ) {
    setGifts([
      ...gifts,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: gift,
        qty,
        image,
        receiver,
      },
    ]);
  }

  function remove(gift: Gift) {
    setGifts(gifts.filter((item) => item.id !== gift.id));
  }

  function clean() {
    setGifts([]);
  }

  return { gifts, get, add, update, remove, clean };
};
