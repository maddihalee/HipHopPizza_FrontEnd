import CreateOrderForm from '../components/CreateOrderForm';

export default function CreateOrderPage() {
  const prodObj = {
    name: '',
    price: 10.99,
  };
  return <CreateOrderForm pmtTypeObj={{ id: 1, type: 'Okay' }} prodObj={prodObj} />;
}
