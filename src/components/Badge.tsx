import React from 'react';

type Props = {
  qty: number;
  handleUpdate: (qty: number) => void;
};

function Badge({ qty, handleUpdate }: Props) {
  return (
    <span className="flex flex-col">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded mb-1"
        onClick={() => handleUpdate(1)}
      >
        ⬆️
      </button>
      <span className="inline-flex items-center justify-center px-2 py-1 mx-2 text-sm font-bold leading-none text-white bg-green-600 rounded-full">
        <span>{qty}</span>
      </span>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded mt-1"
        onClick={() => handleUpdate(-1)}
      >
        ⬇️
      </button>
    </span>
  );
}

export default Badge;
