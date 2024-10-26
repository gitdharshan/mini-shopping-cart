// src/components/product-tile/index.js
import { useState } from 'react';
import { useCart } from '../../context/index';
import './index.css';

export default function ProductTile({ product }) {
  const { addToCart } = useCart();
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 1500); // Message disappears after 1.5 seconds
  };

  return (
    <div className="product-tile p-4 border border-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-2" />
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-700"
      >
        Add to Cart
      </button>
      {addedMessage && <p className="text-green-500 mt-2">Added successfully!</p>}
    </div>
  );
}
