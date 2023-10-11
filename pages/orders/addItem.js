import AddOrderForm from '../../components/AddItemForm';

export default function AddItemPage() {
  const prodObj = {
    id: 1,
    name: '',
    price: 10.99,
    imgUrl: 'path/to/image.jpg',
  };
  return <AddOrderForm prodObj={prodObj} />;
}
