const dbUrl = 'https://localhost:7009';

const getPmt = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/paymentTypes`, {
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

const getSinglePmt = (pmtTypeId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/paymentTypes/${pmtTypeId}`, {
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

export { getPmt, getSinglePmt };
