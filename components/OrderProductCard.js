import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteOrderProducts } from '../utils/data/productData';

export default function OrderProductCard({ prodObj, onUpdate }) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${prodObj.name}?`)) {
      console.warn('product ID to delete:', prodObj.id);
      deleteOrderProducts(prodObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          {prodObj.name}
        </Card.Title>
        <p className="card-text bold" style={{ textAlign: 'center', marginBottom: '5px' }}>
          Price: {prodObj.price}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link passHref href={`/orders/${prodObj?.id}`}>
            <Button variant="dark" className="mr-2">
              EDIT
            </Button>
          </Link>
          <Button variant="dark" className="mr-2" onClick={deleteThisItem}>
            DELETE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

OrderProductCard.propTypes = {
  prodObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
