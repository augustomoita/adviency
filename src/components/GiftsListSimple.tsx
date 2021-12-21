import React from 'react';
import Button from './Button';
import GiftItemSimple from './GiftItemSimple';
import './GiftsListSimple.css';

type Props = {
  gifts: Gift[];
};

function GiftsListSimple({ gifts }: Props) {
  return (
    <div className="pt-3">
      <div className="buy-list">
        <h1 className="text-3xl mb-3">Comprar:</h1>
        <ul>
          {gifts.map((gift: Gift) => (
            <GiftItemSimple key={gift.id} gift={gift} />
          ))}
        </ul>
      </div>
      <Button onClick={() => window.print()}>Imprimir</Button>
    </div>
  );
}

export default GiftsListSimple;
