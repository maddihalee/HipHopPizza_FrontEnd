import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import OrderProductCard from '../../components/OrderProductCard';
import { getSingleOrder } from '../../utils/data/orderData';
import { getOrderProducts } from '../../utils/data/productData';

export default function ViewOrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getProducts = () => {
    getSingleOrder(id).then((data) => setOrderDetails(data));
    getOrderProducts(id).then((products) => {
      console.warn('Products:', products);
      setOrderProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Orders Items</h1>
      <Button variant="dark" className="mr-2" onClick={() => router.push('/orders/addItem')}>
        Add Item
      </Button>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {orderDetails.name}
          </h5>
          <hr />
          {orderProducts?.map((product) => (
            <OrderProductCard key={product.Id} prodObj={product} onUpdate={getProducts} />
          ))}
        </div>
      </div>
    </>
  );
}
