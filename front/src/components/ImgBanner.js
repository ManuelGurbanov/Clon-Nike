import React from 'react';

const ImgBanner = ({ url }) => {
    return (
        <div className="flex justify-center w-full m-10">
            <img src={url} alt="banner" className="w-full"/>
        </div>
    );
}

export default ImgBanner;