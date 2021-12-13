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

  function exists(gift: Gift['name'], receiver: Gift['receiver']): boolean {
    return (
      gifts.find(
        (item) =>
          item.name.toLowerCase() === gift.toLowerCase() &&
          item.receiver.toLowerCase() === receiver.toLowerCase()
      ) !== undefined
    );
  }

  function add(
    gift: Gift['name'],
    qty: Gift['qty'],
    image: Gift['image'],
    receiver: Gift['receiver']
  ) {
    if (exists(gift, receiver)) {
      throw new Error('El regalo ya fue cargado');
    }

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

  return { gifts, add, update, remove, clean };
};
