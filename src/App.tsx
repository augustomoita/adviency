import React from 'react';
import GiftForm from './components/GiftForm';
import GiftsList from './components/GiftsList';
import { Gift } from './types';
import { useGift } from './useGift';

function App() {
  const { gifts, add, remove, clean } = useGift();

  const addGift = (gift: Gift['gift'], quantity: Gift['qty']) => {
    add(gift, quantity);
  };

  const deleteGift = (gift: Gift['gift']) => {
    remove(gift);
  };

  const deleteAllGifts = () => {
    clean();
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
