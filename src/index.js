import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Getting the provider and the store.
import {Provider} from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Adding the provider with the imported store. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


