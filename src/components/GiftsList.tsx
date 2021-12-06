import React, { Fragment } from "react";

interface GiftsListProps {
    title: string,
    gifts: Set<string>,
    handleDelete: Function,
    handleDeleteAll: Function
}

function GiftsList({title, gifts, handleDelete, handleDeleteAll}: GiftsListProps) {
    return (
        <Fragment>
        <h1 className="text-3xl mt-6 mb-3">{title}</h1>
        <ul>
          { Array.from(gifts).map((gift, index) => (
              <li key={index} className="my-1">
              { gift }
              <button 
                type="button" 
                className="mx-1 py-1 px-2 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
                onClick={() => handleDelete(gift)}
                >-</button>
            </li>
            ))}
        </ul>
        {
            gifts.size > 0 
            && <button 
            type="button" 
            className="mt-6 py-1 px-3 rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600"
            onClick={() => handleDeleteAll()}
            >Borrar todo</button>
        }
        </Fragment>
    );
}

export default GiftsList;