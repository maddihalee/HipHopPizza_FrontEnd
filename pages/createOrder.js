import CreateOrderForm from '../components/CreateOrderForm';

export default function CreateOrderPage() {
  const prodObj = {
    id: 1,
    name: '',
    price: 10.99,
    imgUrl: 'path/to/image.jpg',
  };
  return <CreateOrderForm pmtTypeObj={{ id: 1, type: 'Okay' }} prodObj={prodObj} />;
}
