import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteOrder } from '../utils/data/orderData';

export default function OrderCard({ ordObj, onUpdate }) {
  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${ordObj.name}?`)) {
      console.warn('Order Id to delete:', ordObj.id);
      deleteOrder(ordObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          {ordObj.name}
        </Card.Title>
        <p className="card-text bold" style={{ textAlign: 'center', marginBottom: '5px' }}>
          {ordObj.phone}
        </p>
        <p className="card-text bold" style={{ textAlign: 'center', marginBottom: '5px' }}>
          {ordObj.email}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link passHref href={`/orders/${ordObj.id}`}>
            <Button variant="dark" className="mr-2">
              VIEW
            </Button>
          </Link>
          <Button variant="dark" className="mr-2" onClick={deleteThisOrder}>
            DELETE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  ordObj: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.number,
    orderType: PropTypes.string,
    name: PropTypes.string,
    Tip: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
