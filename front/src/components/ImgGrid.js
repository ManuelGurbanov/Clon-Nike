import React from 'react';

const ImgGrid = ({ imgUrl }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 m-10">
            <div className="grid w-full grid-cols-2 gap-4">
                {imgUrl.slice(0, 2).map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} className="w-full" />
                ))}
            </div>
            <div className="grid w-full grid-cols-3 gap-4 mt-4">
                {imgUrl.slice(2).map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} className="w-full" />
                ))}
            </div>
        </div>
    );
}

export default ImgGrid;
