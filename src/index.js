//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Components

import App from './routes/App'

//Assets

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../src/assets/styles/responsive/_responsive.scss'
import './global.scss'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

