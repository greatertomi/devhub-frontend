import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

import reducers from './reducers'
import App from './App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
