import React, { useState } from 'react';
import GiftForm from './components/GiftForm';
import GiftsList from './components/GiftsList';
import { Gift } from './types';
import { useGift } from './useGift';

function App() {
  const { gifts, find, add, update, remove, clean } = useGift();
  const [error, setError] = useState<string | null>(null);

  const addGift = (
    gift: Gift['name'],
    quantity: Gift['qty'],
    image: Gift['image']
  ) => {
    if (find(gift)) {
      setError('El regalo ya fue cargado');
      return;
    }
    setError(null);
    add(gift, quantity, image);
  };

  const updateQuantity = (gift: Gift, qty: Gift['qty']) => {
    update(gift, qty);
  };

  const deleteGift = (gift: Gift) => {
    remove(gift);
  };

  const deleteAllGifts = () => {
    clean();
  };

  return (
    <div className="font-christmas bg-christmas h-screen flex flex-col justify-center items-center text-center">
      <div className="bg-white rounded p-16">
        <h1 className="text-3xl mb-3">Regalos:</h1>
        <GiftForm onGiftSubmitted={addGift} error={error} />
        <GiftsList
          gifts={gifts}
          onDeleteItem={deleteGift}
          onDeleteAll={deleteAllGifts}
          onUpdateItem={updateQuantity}
        />
      </div>
    </div>
  );
}

export default App;
