import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

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
// const action = type => store.dispatch({type});
sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
              <VStack spacing={8} justify="flex-start">
                <Routes history={history} />
              </VStack>
            </Grid>
          </Box>
        </ChakraProvider>
      </Provider>
    );
  }
}

export default App;
