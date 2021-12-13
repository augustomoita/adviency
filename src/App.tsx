import React, { useState } from 'react';
import Button from './components/Button';
import GiftForm from './components/GiftForm';
import GiftsList from './components/GiftsList';
import Modal from './components/Modal';
import { useGift } from './useGift';

function App() {
  const { gifts, upsert, remove, clean } = useGift();
  const [error, setError] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<Gift | null>(null);

  const addGift = (gift: Gift) => {
    try {
      upsert(gift);
      closeModal();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const updateQuantity = (gift: Gift, qty: Gift['qty']) => {
    gift.qty += qty;
    upsert(gift);
  };

  const deleteGift = (gift: Gift) => {
    remove(gift);
  };

  const deleteAllGifts = () => {
    clean();
  };

  const openModal = () => {
    setFormVisible(true);
  };

  const openEditModal = (gift: Gift) => {
    setSelected(gift);
    setFormVisible(true);
  };

  const closeModal = () => {
    setFormVisible(false);
    setError(null);
    setSelected(null);
  };

  return (
    <div className="font-christmas bg-christmas bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center text-center">
      <Modal visible={formVisible}>
        <GiftForm
          onGiftSubmitted={addGift}
          error={error}
          onCancel={closeModal}
          data={selected}
        />
      </Modal>
      <div className="border-8 border-double border-green-600 bg-white rounded px-16 py-8 w-2/5">
        <h1 className="text-3xl mb-3">Regalos:</h1>
        <Button color="red" onClick={openModal}>
          Agregar Regalo
        </Button>
        <GiftsList
          gifts={gifts}
          onDeleteItem={deleteGift}
          onDeleteAll={deleteAllGifts}
          onUpdateItem={updateQuantity}
          onSelectItem={openEditModal}
        />
      </div>
    </div>
  );
}

export default App;
