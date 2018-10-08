import environments from '../../environments';

const url = `${environments}/clients`;

export const fetchData = () => fetch(url)
  .then((response) => response.json());

export const saveData = (newClient) => (
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newClient),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()));
