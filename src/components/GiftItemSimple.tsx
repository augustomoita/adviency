import React from 'react';

type Props = {
  gift: Gift;
};

function GiftItemSimple({ gift }: Props) {
  const { name, image, receiver, qty } = gift;
  return (
    <li className="flex justify-between items-center my-2 py-2 px-2 border-2 shadow-sm hover:shadow-md">
      <span className="flex items-center">
        <img src={image} alt={name} className="h-20 w-20 p-1" />
        <div className="text-left">
          <p className="uppercase text-lg font-medium mx-2">
            {name} ({qty})
          </p>
          <p className="capitalize text-sm text-gray-400 mx-2">{receiver}</p>
        </div>
      </span>
    </li>
  );
}

export default GiftItemSimple;
