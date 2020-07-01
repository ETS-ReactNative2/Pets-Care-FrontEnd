import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux'
import App from './containers/App';
import './styles/index.css';

const store = createStore(allReducers,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);


