import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleProduct } from '../../utils/data/productData';

export default function ViewProductDetails() {
  const [prodDetails, setProdDetails] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProdDetails);
  }, []);

  return (
    <>
      <img src={prodDetails.image} alt={prodDetails.name} style={{ width: '300px' }} />
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {prodDetails.name}
          </h5>
          Price: {prodDetails.price}
          <hr />
        </div>
      </div>
    </>
  );
}
