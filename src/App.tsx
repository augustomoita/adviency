import React, { useState } from 'react';
import GiftForm from './components/GiftForm';
import GiftsList from './components/GiftsList';

function App() {
  const [gifts, setGifts] = useState(() => new Map<string, number>());

  const addGift = (gift: string, quantity: number) => {
    const qty = (gifts.get(gift) || 0) + quantity;
    gifts.set(gift, qty);
    setGifts(() => new Map<string, number>(gifts));
  };

  const deleteGift = (gift: string) => {
    gifts.delete(gift);
    setGifts(() => new Map<string, number>(gifts));
  };

  const deleteAllGifts = () => {
    setGifts(() => new Map<string, number>());
  };

  return (
    <div className="font-christmas bg-christmas h-screen flex flex-col justify-center items-center text-center">
      <div className="bg-white rounded p-16">
        <h1 className="text-3xl mb-3">Regalos:</h1>
        <GiftForm onGiftSubmitted={addGift} />
        <GiftsList
          gifts={gifts}
          handleDelete={deleteGift}
          handleDeleteAll={deleteAllGifts}
        />
      </div>
    </div>
  );
}

export default App;
