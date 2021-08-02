
import './index.css';

import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks';
import { loadUserInitialData } from './ducks/Users'
import services from './services';
import { reducer as formReducer } from 'redux-form';

const store = createStore(combineReducers({
  ...reducers,
  form: formReducer,
}), applyMiddleware(thunk.withExtraArgument(services)));

const loadInitialData = () => store.dispatch(loadUserInitialData());

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App loadInitialData={loadInitialData} history={history}/>
    </Router>
  </Provider>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();