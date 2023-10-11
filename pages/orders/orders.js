import { useState, useEffect } from 'react';
import OrderCard from '../../components/OrderCard';
import { getOrders } from '../../utils/data/orderData';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const getAllTheProducts = () => {
    getOrders().then(setOrders);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {orders.map((order) => (
        <OrderCard key={order.Id} ordObj={order} onUpdate={getAllTheProducts} />
      ))}
    </div>
  );
}
