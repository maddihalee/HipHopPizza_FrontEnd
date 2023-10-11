const dbUrl = 'https://localhost:7009';

const getProducts = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleProduct = (productId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const addProductToOrder = (prodObj) => new Promise((resolve, reject) => {
  console.warn('Adding to order:', prodObj);
  fetch(`${dbUrl}/productOrders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prodObj),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderProducts = (orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ordersProducts/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getSingleProduct,
  getProducts,
  addProductToOrder,
  getOrderProducts,
};
