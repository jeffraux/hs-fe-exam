import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { ToastContextProvider } from './contexts/ToastContext';

import Routes from './routes';

import { rootSaga } from './sagas/saga';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Provider store={store}>
        <ToastContextProvider>
          <div className="container mx-auto">
            <Routes history={history} />
          </div>
        </ToastContextProvider>
      </Provider>
    );
  }
}

export default App;
