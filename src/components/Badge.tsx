import React from 'react';

type Props = {
  qty: number;
  onChange: (qty: number) => void;
};

function Badge({ qty, onChange }: Props) {
  return (
    <span className="flex flex-col">
      <button
        className="bg-white text-gray-800 font-semibold rounded mb-1 hover:text-green-600"
        onClick={() => onChange(1)}
      >
        ⬆️
      </button>
      <span className="inline-flex items-center justify-center px-2 py-1 mx-2 text-sm font-bold leading-none text-white bg-yellow-500 rounded-full">
        <span>{qty}</span>
      </span>
      <button
        className="bg-white text-gray-800 font-semibold rounded mt-1 hover:text-red-600"
        onClick={() => onChange(-1)}
      >
        ⬇️
      </button>
    </span>
  );
}

export default Badge;
