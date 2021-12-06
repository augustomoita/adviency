import React, { useState } from 'react';
import GiftForm from './components/GiftForm';
import GiftsList from './components/GiftsList';

function App() {
  const [ gifts, setGifts ] = useState(
    () => new Set<string>([])
  )

  const addGift = (gift: string) => {
    gifts.add(gift)
    setGifts((gifts) => new Set(gifts))
  }

  const deleteGift = (gift: string) => {
    gifts.delete(gift)
    setGifts((gifts) => new Set(gifts))
  }

  const deleteAllGifts = () => {
    setGifts(() => new Set([]))
  }

  return (
    <div className="font-christmas bg-christmas h-screen flex flex-col justify-center items-center text-center">
      <div className="bg-white rounded p-16">
        <GiftForm onGiftSubmitted={addGift} />
        <GiftsList
          title="Regalos"
          gifts={gifts}
          handleDelete={deleteGift}
          handleDeleteAll={deleteAllGifts}
        />
      </div>
    </div>
  );
}

export default App;
