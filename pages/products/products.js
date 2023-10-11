import { useState, useEffect } from 'react';
import { getProducts } from '../../utils/data/productData';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  const [prods, setProds] = useState([]);

  const getAllTheProducts = () => {
    getProducts().then(setProds);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {prods.map((prod) => (
        <ProductCard key={prod.Id} prodObj={prod} onUpdate={getAllTheProducts} />
      ))}
    </div>
  );
}
