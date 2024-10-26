// src/home/index.js
import { Circles } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import ProductTile from '../components/product-title/index';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchlist() {
    setLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("API fetch error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles height={120} width={120} color="rgb(127,29,29)" ariaLabel="loading" visible={true} />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3 space-y-10">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
