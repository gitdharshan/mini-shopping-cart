// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './home/index';
import Cart from './pages/cart';
import Header from './components/navbar';
import { CartProvider } from './context/index';

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
