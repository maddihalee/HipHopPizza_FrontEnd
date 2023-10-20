import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../../utils/data/productData';
import AddItemForm from '../../../components/AddItemForm';

export default function EditProduct() {
  const [editProduct, setEditProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setEditProduct);
  }, [id]);

  return (<AddItemForm ordObj={editProduct} />);
}
