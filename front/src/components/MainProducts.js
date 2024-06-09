import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function MainProducts( { tittle }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="flex-col items-center justify-center sm:m-20 max-w-[100vw]">
      <h1 className="mb-4 text-2xl font-normal text-left"> {tittle} </h1>
      <div className="grid grid-cols-2 gap-6 overflow-scroll sm:flex">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MainProducts;
