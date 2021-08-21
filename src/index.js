import React from 'react';
import ReactDOM from 'react-dom';

import Cat from './Components/Cat/index'

import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Cat />
  </React.StrictMode>,
  document.getElementById('root')
);

