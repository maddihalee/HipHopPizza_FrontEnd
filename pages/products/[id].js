import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleProduct } from '../../utils/data/productData';
import AddItemForm from '../../components/AddItemForm';

export default function ViewProductDetails() {
  const [prodDetails, setProdDetails] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProdDetails);
  }, []);

  return (
    <>
      <AddItemForm ordObj={prodDetails} />
    </>
  );
}
