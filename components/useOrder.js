import { useState } from 'react';

export default function useOrder() {
  const [order, setOrder] = useState({ products: [] });

  const addToOrder = (product) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      products: [...prevOrder.products, product],
    }));
  };

  return {
    order,
    addToOrder,
  };
}
