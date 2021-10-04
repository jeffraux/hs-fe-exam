import { put, takeLatest, all } from 'redux-saga/effects';

import Api from '../services/events';


// sagas
function* fetchEvents() {
  try {
     const data = yield Api.fetchEvents();
     yield put({ type: 'EVENTS_FETCH_SUCCEEDED', data: data });
  } catch (e) {
     yield put({ type: 'EVENTS_FETCH_FAILED', message: e.message });
  }
}

function* createEvent(event) {
  try {
    const data = yield Api.fetchEvents();
    yield put({ type: 'EVENTS_FETCH_SUCCEEDED', data: data });
  } catch (e) {
    yield put({ type: 'EVENTS_FETCH_FAILED', message: e.message });
  }
}

// watchers
function* watchEventsFetch() {
  yield takeLatest('FETCH_EVENTS', fetchEvents);
}

function* watchEventsCreate() {
  yield takeLatest('CREATE_EVENT', createEvent);
}

// root saga
export function* rootSaga() {
  yield all([
    watchEventsFetch(),
    watchEventsCreate(),
  ]);
}
