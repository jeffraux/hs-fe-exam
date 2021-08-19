const API_URL = 'http://localhost:3001';

const fetchEvents = () => {
  return fetch(`${API_URL}/events`)
    .then(response => response.json());
}

const createEvent = (event) => {
  return fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event),
  })
    .then(response => response.json());
}

const deleteEvent = (id) => {
  return fetch(`${API_URL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json());
}

const updateEvent = (id, event) => {
  return fetch(`${API_URL}/events/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event),
  })
    .then(response => response.json());
}

const Api = {
  fetchEvents,
  createEvent,
  deleteEvent,
  updateEvent,
};

export default Api;
