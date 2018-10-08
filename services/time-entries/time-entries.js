import environments from '../../environments';

const url = `${environments}/time-entries`;

export const fetchData = () => fetch(url)
  .then((response) => response.json());

export const saveData = (newTimeEntry) => (
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newTimeEntry),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()));

export const deleteData = (timeEntryId) => (fetch(`${url}/${timeEntryId}`, {
  method: 'delete'
}).then((response) => response.json()));
