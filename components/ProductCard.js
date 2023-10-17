import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import { useRouter } from 'next/router';
// import { addProductToOrder } from '../utils/data/productData';

export default function ProductCard({ prodObj }) {
  // const { addToOrder } = useOrder();
  // const { router } = useRouter();
  // const { id } = router.query;

  // const handleAddToOrder = () => {
  //   addProductToOrder(prodObj).then(() => router.push(`/orders/orders/${id}`));
  //   console.warn('Prod obj:', prodObj);
  // };

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
};
