import React from 'react';

const ImgGrid = ({ imgUrl }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="grid w-[90%] grid-cols-2 gap-4">
                {imgUrl.slice(0, 2).map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} className="w-full" />
                ))}
            </div>
            <div className="grid w-[90%] grid-cols-3 gap-4 mt-4">
                {imgUrl.slice(2).map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} className="w-full" />
                ))}
            </div>
        </div>
    );
}

export default ImgGrid;
