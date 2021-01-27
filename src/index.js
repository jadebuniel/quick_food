import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IsMobileContextProvider} from './context/IsMobile'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <IsMobileContextProvider>
      <Router>
        <App />
      </Router>
    </IsMobileContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
