import React from "react";

interface GiftsListProps {
    gifts: Set<string>,
    handleDelete: Function,
    handleDeleteAll: Function
}

function GiftsList({gifts, handleDelete, handleDeleteAll}: GiftsListProps) {
    return (
        <div className="pt-3">
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
                ? <button 
                type="button" 
                className="mt-6 py-1 px-3 rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600"
                onClick={() => handleDeleteAll()}
                >Borrar todo</button>
                : <p>Agrega regalos</p>
            }
        </div>
    );
}

export default GiftsList;