import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'

ReactDOM.render(
  <Provider store = {createStore(reducers)}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
