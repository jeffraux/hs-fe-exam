export const getEvents = () => ({
  type: 'FETCH_EVENTS',
});

export const createEvent = (event) => ({
  type: 'CREATE_EVENT',
  event,
});

export const updateEvent = (event) => ({
  type: 'UPDATE_EVENT',
  event,
});

export const deleteEvent = (eventId) => ({
  type: 'DELETE_EVENT',
  eventId,
});
