import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { addProductToOrder } from '../utils/data/productData';

const initialState = {
  name: '',
  price: '',
};

export default function AddOrderForm() {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductToOrder(formInput).then(() => router.push('/orders/orders'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">Add Item to Order</h2>

      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Price" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit"> Add to Order</Button>
    </Form>
  );
}
