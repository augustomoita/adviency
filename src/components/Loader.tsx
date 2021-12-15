import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center pt-3">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-xl font-semibold">Cargando...</h2>
    </div>
  );
}

export default Loader;
