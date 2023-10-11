import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { createOrder } from '../utils/data/orderData';

const initialState = {
  statusId: 1,
  name: '',
  email: '',
  phone: '',
  orderType: '',
};

export default function CreateOrderForm({ ordObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, userId: user[0].id };
    console.warn('Payload:', payload);
    createOrder(payload).then(() => router.push('/orders/orders'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{ordObj.id ? 'Update' : 'Create'} Order</h2>

      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formInput.name}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Phone number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={formInput.phone}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Email"
          name="email"
          value={formInput.email}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Order Type" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Order Type"
          name="orderType"
          value={formInput.orderType}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      {/* <FloatingLabel controlId="floatingInput3" label="Tip" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Tip"
          name="tip"
          value={formInput.tip}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel> */}

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{ordObj.id ? 'Update' : 'Create'} Order</Button>
    </Form>
  );
}

CreateOrderForm.propTypes = {
  ordObj: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.number,
    orderType: PropTypes.string,
    name: PropTypes.string,
    tip: PropTypes.number,
  }),
};

CreateOrderForm.defaultProps = {
  ordObj: PropTypes.shape({
    id: '',
    statusId: '',
    paymentTypeId: '',
    userId: '',
    email: '',
    phone: '',
    orderType: '',
    name: '',
    tip: '',
  }),
};
