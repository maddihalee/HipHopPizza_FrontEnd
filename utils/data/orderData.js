const dbUrl = 'https://localhost:7009';

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders`, {
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

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders/${orderId}`, {
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

export { getOrders, getSingleOrder };
