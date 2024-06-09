import React from 'react';

const TittleAndButton = ({ tittle, buttonText }) => {

    return (
        <div className="flex flex-col items-center justify-center w-screen gap-6 mt-6 mb-2">
            <h1 className="text-5xl font-black text-center">{tittle}</h1>
            <button className="px-6 py-3 text-white transition-opacity duration-75 bg-black rounded-md hover:bg-opacity-40">{buttonText}</button>
        </div>
    );
}

export default TittleAndButton;