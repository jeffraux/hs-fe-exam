import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Routes from './routes';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

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
        <ChakraProvider theme={theme}>
          <div className="container mx-auto">
            <Routes history={history} />
          </div>
        </ChakraProvider>
      </Provider>
    );
  }
}

export default App;
