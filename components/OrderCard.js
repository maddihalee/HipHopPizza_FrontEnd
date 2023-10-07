import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function OrderCard({ ordObj }) {
  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          UserId: {ordObj.userId}
        </Card.Title>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          Payment type: {ordObj.paymentTypeId}
        </p>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          Status: {ordObj.statusId}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link passHref href={`/product/${ordObj.id}`}>
            <Button variant="dark" className="mr-2">
              VIEW
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  ordObj: PropTypes.shape({
    id: PropTypes.number,
    statusId: PropTypes.string,
    paymentTypeId: PropTypes.string,
    userId: PropTypes.number,
  }).isRequired,
};
