import { Circles } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import ProductTile from '../components/product-tile/index';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchlist() {
    setLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      console.log(data); // Check if products data is received
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
          <Circles
            height={120}
            width={120}
            color="rgb(127,29,29)"
            ariaLabel="loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products.length > 0
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : <p>No products available</p>}
        </div>
      )}
    </div>
  );
}
