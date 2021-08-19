const initialState = {
  events: [],

  message: '',
};

export default function calendar(state = initialState, action) {
  switch (action.type) {
    case 'EVENTS_FETCH_SUCCEEDED':
      return { ...state, events: action.data };
    case 'EVENTS_FETCH_FAILED':
      return { ...state, message: action.message };
    default :
      return state;
  }
}
