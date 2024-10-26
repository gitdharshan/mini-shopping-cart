// src/pages/cart.js
import { useCart } from '../context/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './cart.css';
export default function Cart() {
  const { cart, removeFromCart, increaseQuantity } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-b">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <h2 className="flex-1">{item.title}</h2>
            <p>${item.price} x {item.quantity}</p>
            <button 
              onClick={() => increaseQuantity(item.id)}
              className="bg-green-500 text-white px-2 py-1 rounded mr-2"
            >
              +
            </button>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
