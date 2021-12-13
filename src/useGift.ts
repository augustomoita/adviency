import { useEffect, useState } from 'react';

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

  function exists(gift: Gift): boolean {
    return (
      gifts.find(
        (item) =>
          item.name.toLowerCase() === gift.name.toLowerCase() &&
          item.receiver.toLowerCase() === gift.receiver.toLowerCase()
      ) !== undefined
    );
  }

  function add(gift: Gift) {
    if (exists(gift)) {
      throw new Error('El regalo ya fue cargado');
    }

    setGifts([...gifts, gift]);
  }

  function remove(gift: Gift) {
    setGifts(gifts.filter((item) => item.id !== gift.id));
  }

  function clean() {
    setGifts([]);
  }

  function generateId(): number {
    return Math.floor(Math.random() * Date.now());
  }

  return { gifts, add, update, remove, clean, generateId };
};
