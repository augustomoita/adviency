import { useEffect, useLayoutEffect, useState } from 'react';
import api from './api';

export const useGift = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    setLoading(true);
    setGifts(api.gifts.list());
    setLoading(false);
  }, []);

  useEffect(() => {
    return api.gifts.save(gifts);
  }, [gifts]);

  function upsert(gift: Gift) {
    if (exists(gift)) {
      update(gift);
      return;
    }

    if (isRepetead(gift)) {
      throw new Error('El regalo ya fue cargado');
    }

    add(gift);
  }

  function add(gift: Gift) {
    setGifts([...gifts, gift]);
  }

  function update(gift: Gift) {
    setGifts(gifts.map((item) => (item.id === gift.id ? gift : item)));
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

  function isRepetead(gift: Gift): boolean {
    return (
      gifts.find(
        (item) =>
          item.name.toLowerCase() === gift.name.toLowerCase() &&
          item.receiver.toLowerCase() === gift.receiver.toLowerCase() &&
          item.id !== gift.id
      ) !== undefined
    );
  }

  function exists(gift: Gift): boolean {
    return gifts.find((item) => item.id === gift.id) !== undefined;
  }

  return { gifts, upsert, remove, clean, generateId, loading };
};
