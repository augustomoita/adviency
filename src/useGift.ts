import { useState } from 'react';
import { IGift } from './types';

export const useGift = () => {
  const [gifts, setGifts] = useState<IGift[]>([]);

  function update(gift: IGift['gift'], qty: IGift['qty']) {
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

  function add(gift: IGift['gift'], qty: IGift['qty']) {
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

  function remove(gift: IGift['gift']) {
    setGifts(gifts.filter((item) => item.gift !== gift));
  }

  function clean() {
    setGifts([]);
  }

  return { gifts, add, remove, clean };
};
