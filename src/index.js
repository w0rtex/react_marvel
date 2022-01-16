import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MarvelService from "./services/MarvelService";

import './scss/app.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);