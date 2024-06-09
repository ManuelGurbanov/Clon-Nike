import React from 'react';

const TittleAndButton = ({ tittle, buttonText }) => {

    return (
        <div className="flex flex-col items-center justify-center w-screen gap-6 mt-6 mb-2">
            <h1 className="text-2xl font-black text-center sm:text-5xl">{tittle}</h1>
            <button className="px-3 py-1 text-white transition-opacity duration-75 bg-black rounded-md sm:px-6 sm:py-3 hover:bg-opacity-40">{buttonText}</button>
        </div>
    );
}

export default TittleAndButton;