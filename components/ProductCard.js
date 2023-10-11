import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
// import Link from 'next/link';
// import useOrder from './useOrder';
import { addProductToOrder } from '../utils/data/productData';
import { createOrder } from '../utils/data/orderData';

export default function ProductCard({ prodObj, orderObj }) {
  // const { addToOrder } = useOrder();

  const handleAddToOrder = () => {
    if (orderObj?.id) {
      addProductToOrder(prodObj.id, orderObj.id).then();
    } else {
      createOrder().then(addProductToOrder(prodObj.id, orderObj.id));
    }
    console.warn('Prod obj:', prodObj);
    console.warn('Order obj:', orderObj);
  };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Img
        variant="top"
        src={prodObj.imgUrl}
        alt={prodObj.name}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          {prodObj.name}
        </Card.Title>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          {prodObj.price}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <Link href="/currentOrder" passHref> */}
          <Button variant="dark" className="mr-2" onClick={handleAddToOrder}>
            ADD TO ORDER
          </Button>
          {/* </Link> */}
        </div>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  prodObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
  }).isRequired,
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    statusId: PropTypes.string,
    paymentTypeId: PropTypes.string,
    userId: PropTypes.number,
  }).isRequired,
};
