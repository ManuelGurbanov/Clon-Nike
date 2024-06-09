import React from 'react';
import { useCart } from './CartContext';
import cartLogo from '../cartLogo.png';
const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="sm:m-5 transition duration-75 rounded shadow-lg hover:ring-1 hover:ring-black sm:min-w-[350px]">
      <img src={product.url} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        {product.new ? ( <h1 className="font-bold text-orange-400 rounded-full">Lo nuevo</h1> ) : null}
        <h2 className="mb-2 text-xl font-normal">{product.name}</h2>
        <p className="mb-2 font-light text-gray-500 text-md">{product.description}</p>
        <p className="text-base text-gray-700">${product.price}</p>
      </div>
      
      <button onClick={handleAddToCart} className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        <img
            src={cartLogo}
            className='w-6'
            alt='Shopping Cart Icon'
          />
      </button>

    </div>
  );
};

export default ProductCard;
