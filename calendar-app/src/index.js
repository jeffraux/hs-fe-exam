import React, { StrictMode } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';


ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
