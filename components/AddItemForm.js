import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { addProductToOrder, createProduct, updateProduct } from '../utils/data/productData';

const initialState = {
  name: '',
  price: '',
};

export default function AddItemForm({ ordObj, prodObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();
  // console.warn(orderId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prodObj.id) {
      const payload = { ...formInput, id: prodObj.id };
      updateProduct(payload)
        .then(router.push(`/orders/${ordObj.orderId}`));
    } else {
      createProduct(formInput).then((response) => addProductToOrder(response, ordObj.orderId).then(() => router.push(`/orders/${ordObj.orderId}`)));
    }
  };

  useEffect(() => {
    if (prodObj.id) {
      setFormInput(prodObj);
    }
  }, [prodObj]);

  console.warn(prodObj.id);

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
      <Button type="submit" onClick={handleSubmit}> Add to Order</Button>
    </Form>
  );
}

AddItemForm.propTypes = {
  ordObj: PropTypes.shape({
    orderId: PropTypes.number,
    userId: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.number,
    orderType: PropTypes.string,
    name: PropTypes.string,
    Tip: PropTypes.number,
  }).isRequired,
  prodObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};
