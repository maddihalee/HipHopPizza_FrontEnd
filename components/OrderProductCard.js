import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function OrderProductCard({ prodObj }) {
  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          Name: {prodObj.name}
        </Card.Title>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          Phone Number: {prodObj.price}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link passHref href={`/orders/${prodObj.id}`}>
            <Button variant="dark" className="mr-2">
              EDIT
            </Button>
          </Link>
          <Button variant="dark" className="mr-2">
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
};
