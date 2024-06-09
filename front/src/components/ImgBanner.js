import React from 'react';

const ImgBanner = ({ url }) => {
    return (
        <div className="flex justify-center">
            <img src={url} alt="banner" className="w-[90%]"/>
        </div>
    );
}

export default ImgBanner;