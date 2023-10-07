import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductCard({ prodObj }) {
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
          <Link passHref href={`/product/${prodObj.id}`}>
            <Button variant="dark" className="mr-2">
              VIEW
            </Button>
          </Link>
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
