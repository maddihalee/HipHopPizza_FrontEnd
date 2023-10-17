import { useRouter } from 'next/router';
import AddItemForm from '../../components/AddItemForm';

export default function AddItemPage() {
  const router = useRouter();
  const prodObj = {
    name: '',
    price: 10.99,
    orderId: router.query.order,
  };
  console.warn(router.query);
  return <AddItemForm ordObj={prodObj} />;
}
