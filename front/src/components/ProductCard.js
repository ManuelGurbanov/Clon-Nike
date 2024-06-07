import React from 'react';
const ProductCard = ({ product }) => {
  return (
    <div className="m-5 transition duration-75 rounded shadow-lg hover:ring-1 hover:ring-black min-w-[350px]">
      <img src={product.url} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        {product.new ? ( <h1 className="font-bold text-orange-400 rounded-full">Lo nuevo</h1> ) : null}
        <h2 className="mb-2 text-xl font-normal">{product.name}</h2>
        <p className="mb-2 font-light text-gray-500 text-md">{product.description}</p>
        <p className="text-base text-gray-700">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
