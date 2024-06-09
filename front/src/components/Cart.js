import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeItem, clearCart, getCartTotal } = useCart();

  return (
    <div className='fixed right-0 w-48 p-4 bg-white'>
      <h2 className="mb-4 text-lg font-bold">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Su carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-2">
              <p>{item.name} - ${item.price} x {item.quantity}</p>
              <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-400">Eliminar</button>
            </div>
          ))}
          <hr className="my-2" />
          <p className="font-bold">Total: ${getCartTotal()}</p>
          <button onClick={clearCart} className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
            Vaciar
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
