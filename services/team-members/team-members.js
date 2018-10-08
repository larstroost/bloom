const url = 'localhost:3001/team-members';

export const fetchData = () => fetch(url)
  .then((response) => response.json());

export const saveData = (newTeamMember) => (
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newTeamMember),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()));
