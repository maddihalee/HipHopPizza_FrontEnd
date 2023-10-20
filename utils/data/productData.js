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

const createProduct = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addProductToOrder = (prodObj, orderId) => new Promise((resolve, reject) => {
  console.warn('Adding to order:', prodObj);
  fetch(`${dbUrl}/productOrders/${orderId}`, {
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

const deleteOrderProducts = (productId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const updateProduct = (productId, payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getSingleProduct,
  getProducts,
  addProductToOrder,
  getOrderProducts,
  createProduct,
  deleteOrderProducts,
  updateProduct,
};
